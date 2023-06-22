import csImage from './images/logo/cs.jpg';
import ceImage from './images/logo/ce.jpg';
import seImage from './images/logo/se.jpg';
import secImage from './images/logo/sec.jpg';
import dsImage from './images/logo/ds.jpg';
import aiImage from './images/logo/ai.jpg';
import hciImage from './images/logo/hci.jpg';
import { Link } from 'react-router-dom';
import Chat from './Chat';

function Card(props) {
    return (
        <div className={"card card-compact w-80 md:w-96 bg-base-100 shadow-xl mx-auto " + props.className}>
            <figure><img src={props.image} loading='lazy' alt={props.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className='mt-2 mb-4'>{props.description}</p>
                <div className="card-actions justify-end">
                    <Link to={props.link} className="btn btn-primary">معلومات اكثر</Link>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Chat />
            <br />
            <br />
            <div dir='rtl' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                <Card title="علوم الحاسب" image={csImage} description="دراسة الأسس النظرية والتطبيقية للحوسبة، بما في ذلك تصميم الألغاريتمات وتطوير البرمجيات وتحليل البيانات والحوسبة السحابية والشبكات الحاسوبية. يهدف هذا المجال إلى تطوير تقنيات وحلول مبتكرة للمشكلات الحاسوبية وتحسين الأداء والكفاءة والأمان في الأنظمة الحاسوبية." link="cs" />

                <Card title="هندسة الحاسب" image={ceImage} description="دراسة تصميم وتحليل وتطوير الأنظمة الحاسوبية والإلكترونية، بما في ذلك تصميم وتطوير بطاقات الدوائر المطبوعة والمعالجات والأجهزة الإلكترونية الأخرى. يتضمن هذا المجال أيضًا دراسة تقنيات التحكم والإتصال والشبكات." link="ce" />

                <Card title="هندسة البرمجيات" image={seImage} description="تصميم وتطوير البرمجيات وتحليلها واختبارها. يشمل هذا المجال دراسة تقنيات البرمجة وإدارة المشاريع البرمجية والتحكم في الجودة. يهدف هذا المجال إلى تطوير برامج تتمتع بالحد الأدنى من الأخطاء والمتطلبات الوظيفية الفعالة." link="se" />

                <Card title="الامن السيبراني" image={secImage} description="حماية الأنظمة الحاسوبية والشبكات والبيانات من الهجمات الإلكترونية والتهديدات الأمنية. يشمل هذا المجال دراسة تقنيات التشفير والتحليل الأمني والكشف عن الهجمات والتدابير الأمنية الوقائية والتصميم الأمني." link="sec" />

                <Card title="علم البيانات" image={dsImage} description="دراسة الطرق الكمية لتحليل البيانات الكبيرة واستخراج الأنماط والمعلومات القيمة منها، ويشمل استخدام تقنيات الذكاء الاصطناعي وتعلم الآلة والإحصاء وتحليل البيانات. يهدف هذا المجال إلى تطوير تقنيات تساعد في إدارة البيانات وتحليلها للحصول على معلومات قيمة." link="ds" />

                <Card title="الذكاء الاصطناعي" image={aiImage} description="دراسة تطوير الأنظمة والبرمجيات التي تتمتع بالقدرة على التفكير واتخاذ القرارات الذاتية، بما في ذلك تطبيقات التعلم الآلي وتحليل النصوص والتصنيف والتنبؤ. يهدف هذا المجال إلى تطوير تقنيات تساعد في تحليل وفهم البيانات وتطوير حلولات للمشكلات الحاسوبية والذكاء الاصطناعي." link="ai" />

                <Card title="تفاعل المستخدم مع الحاسب" className='md:col-span-2 xl:col-span-3' image={hciImage} description="تصميم وتطوير الواجهات الرسومية والتفاعلية بين الإنسان والحاسوب، بما في ذلك تصميم تطبيقات المستخدم ومواقع الويب وألعاب الفيديو وأنظمة المحادثة. يهدف هذا المجال إلى تحسين تجربة المستخدم وراحته في استخدام الأنظمة الحاسوبية والتطبيقات، ويشمل دراسة النماذج النفسية والتصميم الجرافيكي والتفاعل الإنساني-الحاسوب." link="hci" />
            </div>
        </div>
    );
}