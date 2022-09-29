import React, { useEffect, useState } from 'react';
import './ActivityDetails.css';
import nahid from '../../nahid-p.jpg';

const ActivityDetails = ({ count }) => {
    const [time, setTime] = useState([]);
    console.log(time);
    let totalTime = 0;
    for (const exercise of count) {
        totalTime = totalTime + exercise.time;
    }

    useEffect(() => {
        const restTi = localStorage.getItem('restTime');
        setTheTime(restTi);
    }, [time])

    const setTheTime = time => {
        localStorage.setItem('restTime', time);
        setTime(time);
    }

    const handleExercise = () => {

    }



    return (
        <div>
            <div className='flex'>
                <img className='rounded-xl' src={nahid} alt="" />
                <div className='ml-3'>
                    <h4 className='text-xl font-bold'>Nahid Parvez</h4>
                    <p className='text-slate-500'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='mt-10 flex justify-around bg-slate-200 p-2 rounded-md'>
                <div>
                    <p className='text-xl font-semibold'>72<small className='text-slate-400'>kg</small></p>
                    <p className='font-semibold text-slate-500'>Weight</p>
                </div>
                <div>
                    <p className='text-xl font-semibold'>5.8</p>
                    <p className='font-semibold text-slate-500'>Height</p>
                </div>
                <div>
                    <p className='text-xl font-semibold'>30<small className='text-slate-400'>yrs</small></p>
                    <p className='font-semibold text-slate-500'>Age</p>
                </div>
            </div>
            <div className='mt-7'>
                <h2 className='text-xl font-bold'>Resting Time</h2>
                <div className='flex justify-around bg-slate-200 rounded-md p-3 mt-7'>
                    <button onClick={() => setTheTime(10)} className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>10s</button>
                    <button onClick={() => setTheTime(20)} className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>20s</button>
                    <button onClick={() => setTheTime(30)} className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>30s</button>
                    <button onClick={() => setTheTime(40)} className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>40s</button>
                    <button onClick={() => setTheTime(50)} className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>50s</button>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl font-bold'>Exercise Details</h2>
                <div className='flex justify-between bg-slate-200 p-3 rounded-md mt-5'>
                    <p>Exercise Time</p>
                    <p className='text-slate-400'>{totalTime} seconds</p>
                </div>
                <div className='flex justify-between bg-slate-200 p-3 rounded-md mt-5'>
                    <p>Resting Time</p>
                    <p className='text-slate-400'>{time} seconds</p>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button onClick={handleExercise} className='bg-violet-800 hover:bg-violet-700 px-12 py-3 text-white lg:text-lg sm:text-sm rounded-lg'>Exercise Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;