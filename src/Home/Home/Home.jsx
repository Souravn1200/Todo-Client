import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-[#161A30]'>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;