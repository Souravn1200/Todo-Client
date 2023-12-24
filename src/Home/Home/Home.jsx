import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#31304D]'>
                
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>


    );
};

export default Home;