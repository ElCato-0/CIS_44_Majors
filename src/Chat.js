import { useEffect, useRef, useState } from "react";
import axios from "axios";

async function sendGptRequest(messages) {
    const { data } = await axios.post('https://api.pawan.krd/v1/chat/completions', {
        "model": "gpt-3.5-turbo",
        "max_tokens": 512,
        "messages": messages,
    }, {
        headers: {
            'Authorization': 'Bearer pk-gndQufRkJgVYHvbHAuplUWNBodiMEYZdKqqVpqjLlFKqIVJi',
            'Content-Type': 'application/json',
        }
    }
    );
    console.log(data);
    return data;
}

export default function Chat(props) {

    const [userInput, setUserInput] = useState('');

    const messages = useRef([
        {
            "role": "system",
            "content": "انت مختص بالحاسب الالي مع خبرة 70 سنة في جميع مجالات الحاسب، وانت مستعد تساعد الجميع."
        },
    ]); // [ { text: '...', user: 'user' }, { text: '...', user: 'bot' }

    const [chatMessages, setChatMessages] = useState([]);
    const [status, setStatus] = useState(); // idle, loading, success, error

    async function sendUserInput(e) {

        setUserInput('');

        if (userInput.trim() === '') {
            setStatus('error');
            return;
        }

        if (messages.current.length > 10) {
            // reset messages
            messages.current = [
                {
                    "role": "system",
                    "content": "انت مختص بالحاسب الالي مع خبرة 70 سنة في جميع مجالات الحاسب، وانت مستعد تساعد الجميع."
                },
            ];
            setChatMessages([]);
            setStatus('max limit reached, reseting');
            return;
        }

        messages.current.push({
            "role": "user",
            "content": userInput
        });

        const gptResponse = await sendGptRequest(messages.current);

        try {
            if (gptResponse.choices[0].message.content === '') {
                setStatus('error');
                // pop the last message
                messages.current.pop();
                return;
            }
        }
        catch (e) {
            setStatus('error');
            // pop the last message
            messages.current.pop();
            return;
        }


        messages.current.push({
            "role": "assistant",
            "content": gptResponse.choices[0].message.content
        });

        setStatus();

        // setChatMessages to be every message content only (without role) and without the very first message
        setChatMessages(messages.current.slice(1).map(message => message.content));

        console.log(messages.current);
    }

    useEffect(() => {
        // setChatMessages to be every message content only (without role) and without the very first message
        console.log(chatMessages);
    }, [chatMessages]);

    useState(() => {
        
    }, [status]);

    return (
        <div dir="ltr" className="max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
            <h1 className="mx-auto w-max" dir="rtl">
                اسأل CIS GPT
            </h1>
            {/* For each message in chatMessages */}
            {chatMessages.map((message, index) => {
                return (
                    <div key={index} className={"chat " + (index % 2 === 0 ? "chat-start" : "chat-end")}>
                        <div className="chat-bubble">
                            <div dir="rtl">
                                {message}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="chat chat-start">
                <div className="join">
                    <input disabled={status === "loading"} id="userInput" className="input input-bordered join-item min-w-[45vw] input-sm lg:input-md" dir="rtl" placeholder={ status || 'اكتب هنا'}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setStatus('loading');
                                sendUserInput();
                            }
                        }}
                    />
                    <button disabled={status === "loading"} id="sendBtn" className="btn join-item rounded-r-full btn-sm lg:btn-md"
                        onClick={() => {
                            setStatus('loading');
                            sendUserInput();
                        }}
                    >&gt;</button>
                </div>
            </div>
        </div>
    );
}