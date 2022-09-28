import React from 'react';
import './ActivityDetails.css';
import nahid from '../../nahid-p.jpg';

const ActivityDetails = () => {
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
                    <button className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>10s</button>
                    <button className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>20s</button>
                    <button className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>30s</button>
                    <button className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>40s</button>
                    <button className='p-2 bg-violet-400 hover:bg-violet-700 rounded-full hover:text-white'>50s</button>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl font-bold'>Exercise Details</h2>
                <div className='flex justify-between bg-slate-200 p-3 rounded-md mt-5'>
                    <p>Exercise Time</p>
                    <p className='text-slate-400'>{ } seconds</p>
                </div>
                <div className='flex justify-between bg-slate-200 p-3 rounded-md mt-5'>
                    <p>Resting Time</p>
                    <p className='text-slate-400'>{ } seconds</p>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button className='bg-violet-800 hover:bg-violet-700 px-12 py-3 text-white lg:text-lg sm:text-sm rounded-lg'>Exercise Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;