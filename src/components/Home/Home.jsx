import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;