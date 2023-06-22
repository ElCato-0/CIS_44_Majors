import './App.css';
import csImage from './images/cs.jpg';
import ceImage from './images/ce.jpg';
import seImage from './images/se.jpg';
import secImage from './images/sec.jpg';
import dsImage from './images/ds.jpg';
import aiImage from './images/ai.jpg';
import hciImage from './images/hci.jpg';


function Navbar(props) {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost normal-case text-xl">تخصصات الحاسب د44</a>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className={"card card-compact w-80 md:w-96 bg-base-100 shadow-xl mx-auto " + props.className}>
            <figure><img src={props.image} loading='lazy' alt={props.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">معلومات اكثر</button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className='arabic-font bg-black min-h-screen'>
            <Navbar />
            <br />
            <br />
            <br />
            <div className='container mx-auto'>
                <div dir='rtl' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <Card title="علوم الحاسب" image={csImage} description='يتميز بتقديم مجموعة من المقررات الدراسية التي تغطي مجالات علوم الحاسب الأساسية والتطبيقية والتي تمكن الطالب من الحصول على معرفة واسعة ومتميزة في مجال علوم الحاسب وتمكنه من العمل في مجالات الحاسب المختلفة.' />
                    <Card title="هندسة الحاسب" image={ceImage} />
                    <Card title="هندسة البرمجيات" image={seImage} />
                    <Card title="امن السيبراني" image={secImage} />
                    <Card title="علم البيانات" image={dsImage} />
                    <Card title="ذكاء اصطناعي" image={aiImage} />
                    <Card title="تفاعل المستخدم مع الحاسب" className='md:col-span-2 xl:col-span-3' image={hciImage} />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default App;
