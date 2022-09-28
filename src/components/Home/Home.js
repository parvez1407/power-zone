import React from 'react';
import './Home.css';
import logo from '../../logo.png'
import Exercises from '../Exercises/Exercises';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='exercises-container'>
                <div className='flex'>
                    <img className='w-14 h-10' src={logo} alt="" />
                    <h1 className='text-4xl text-violet-700 font-black'>POWER-ZONE</h1>
                </div>
                <div className='all-exercises'>
                    <h2 className='text-2xl mt-7 font-bold text-slate-700'>Select Your Activity</h2>
                    <Exercises></Exercises>
                </div>
            </div>
            <div className='info-cart'>
                <ActivityDetails></ActivityDetails>
            </div>
        </div>
    );
};

export default Home;