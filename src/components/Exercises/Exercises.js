import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            {
                exercises.map(exercise => <Exercise
                    exercise={exercise}
                    key={exercise.id}
                ></Exercise>)
            }
        </div>
    );
};

export default Exercises;