import React, { useEffect, useState } from 'react';

import './Home.css';
import logo from '../../logo.png'
import Exercises from '../Exercises/Exercises';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    const handleAddToList = (exercise) => {
        const newCount = [...count, exercise];
        setCount(newCount);
    }
    return (
        <div className='home-container'>
            <div className='exercises-container'>
                <div className='flex'>
                    <img className='w-14 h-10' src={logo} alt="" />
                    <h1 className='text-4xl text-violet-700 font-black'>POWER-ZONE</h1>
                </div>
                <div className='all-exercises'>
                    <h2 className='text-2xl mt-7 font-bold text-slate-700'>Select Your Activity</h2>
                    <Exercises exercises={exercises} handleAddToList={handleAddToList}></Exercises>
                </div>
            </div>
            <div className='info-cart p-6 bg-slate-100'>
                <ActivityDetails count={count}></ActivityDetails>
            </div>
        </div>
    );
};

export default Home;