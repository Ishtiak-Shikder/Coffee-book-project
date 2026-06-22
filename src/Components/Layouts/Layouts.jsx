import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layouts = () => {
    return (
        <>
        <div className='h-16'>
            <Navbar/>
        </div>
        <div className='max-w-7xl mx-auto'>              
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
        </>
    );
};

export default Layouts;