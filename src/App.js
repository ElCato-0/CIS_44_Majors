import { Link, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function Navbar(props) {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" dir='rtl'>
                        <li><Link to='cs'>علوم الحاسب</Link></li>
                        <li><Link to='ce'>هندسة الحاسب</Link></li>
                        <li><Link to='se'>هندسة البرمجيات</Link></li>
                        <li><Link to='sec'>الامن السيبراني</Link></li>
                        <li><Link to='ds'>علم البيانات</Link></li>
                        <li><Link to='ai'>الذكاء الاصطناعي</Link></li>
                        <li><Link to='hci'>تفاعل المستخدم</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn btn-ghost normal-case text-xl">تخصصات الحاسب د44</Link>
            </div>
        </div>
    );
}

function App(props) {

    const location = useLocation();

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
        document.title = `تخصصات الحاسب د44 | ${routesNames[location.pathname]}`; // Set the page title based on the current route
    }, [location]);

    return (
        <div className='arabic-font bg-black min-h-screen'>
            <Navbar />
            <br className='xl:hidden' />
            <br />
            <br />
            <div className='container mx-auto' dir='rtl'>
                {props.children}
            </div>
            <br />
            <br />
            <br className='xl:hidden' />
        </div>
    );
}

export default App;
