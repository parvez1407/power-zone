import React from 'react';
import './Exercise.css';

const Exercise = ({ exercise }) => {
    const { name, img, time } = exercise;
    return (
        <div className='exercise-container p-4 '>
            <img className='rounded-lg' src={img} alt="" />
            <h2 className='my-3 text-xl font-bold text-violet-500'>{name}</h2>
            <p className='my-3'>Time Required: {time}s</p>
            <div className='text-center mt-10'>
                <button className='bg-violet-800 px-20 py-3 text-white text-lg rounded-lg'>Add to List</button>
            </div>
        </div>
    );
};

export default Exercise;