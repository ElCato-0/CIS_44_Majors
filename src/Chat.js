export default function Chat(props) {
    return (
        <div dir="ltr" className="max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
            <h1 className="mx-auto w-max" dir="rtl">
                اسأل ChatGPT
            </h1>
            <div>
                <div className="chat chat-start">
                    <div className="chat-bubble">
                        <div dir="rtl">
                            السلام عليكم
                        </div>
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble">
                        وعليكم السلام
                    </div>
                </div>
            </div>
            <div className="chat chat-start">
                <div className="join">
                    <input className="input input-bordered join-item min-w-[45vw] input-sm lg:input-md" dir="rtl" placeholder="اكتب هنا" />
                    <button className="btn join-item rounded-r-full btn-sm lg:btn-md">></button>
                </div>
            </div>
        </div>
    );
}