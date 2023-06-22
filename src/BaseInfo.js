import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FullScreenImage({ src, alt, thumbnailClass, fullScreenClass }) {

    const handleImageClick = () => {
        // open a new window with the image
        window.open(src, '_blank');
    };

    return (
        <div className="relative z-10">
            <div
                className={`w-64 h-64 md:w-80 md:h-80 bg-gray-400 cursor-pointer ${thumbnailClass}`}
                style={{ backgroundImage: `url('${src}')`, backgroundSize: 'cover' }}
                onClick={handleImageClick}
            />
        </div>
    );
}

export default function BaseInfo(props) {

    const location = useLocation();
    const [header, setHeader] = useState('');

    useEffect(() => {
        let routesNames = {
            '/': 'الرئيسية',
            '/cs': 'علوم الحاسب',
            '/ce': 'هندسة الحاسب',
            '/se': 'هندسة البرمجيات',
            '/sec': 'الامن السيبراني',
            '/ds': 'علم البيانات',
            '/ai': 'الذكاء الاصطناعي',
            '/hci': 'تفاعل المستخدم مع الحاسب',
        }
        setHeader(routesNames[location.pathname]);
    }, [location]);

    return (
        <>
            <article className='prose prose-sm mx-2'>
                <h1>{header}</h1>
                <hr />
                <h2>الخطة</h2>
                <p>
                    اضغط على الصورة لفتحها
                </p>

                {/* make a flex that is centred and has a horizontal flow */}
                <div className="flex justify-center flex-wrap">
                    {/* make a div that is 1/2 of the width of the parent */}
                    <div className="w-2/5">
                        <FullScreenImage src={props.image1} class="join-item object-cover h-48 w-96" />
                    </div>
                    <div className='w-1/5'>

                    </div>
                    {/* make a div that is 1/2 of the width of the parent */}
                    <div className="w-2/5">
                        <FullScreenImage src={props.image2} class="join-item object-cover h-48 w-96" />
                    </div>
                </div>

                <h2>
                    المقررات (بمساعدة ChatGPT => غير دقيق)
                </h2>
                <p>
                    يرجى ملاحظة أن هذه البيانات مستمدة من المعلومات العامة وقد تختلف تفاصيلها حسب المؤسسة التعليمية أو البرنامج التعليمي المحدد. قد تحتاج إلى مزيد من البحث لمعرفة المزيد عن المحتوى والمتطلبات الدقيقة لكل مقرر.
                </p>
            </article>
            <div className="overflow-x-auto">
                <table className="table sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {/* head */}
                    <thead>
                        <tr className='sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                            <th className="text-right">المقرر</th>
                            <th className="text-right">
                                الوصف&nbsp;
                                <strong className='text-error'>
                                    التقريبي
                                </strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* loop for each row in props.data and display a tr */}
                        {props.data.map((row, index) => {
                            return (
                                <tr key={index} className=''>
                                    {/* loop for each column in the row and display a td */}
                                    {row.map((column, index) => {
                                        return (
                                            <td key={index} className="text-right">{column}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>


    );
}