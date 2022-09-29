
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = ({ exercises, handleAddToList }) => {

    return (
        <div className='exercises-cart-container'>
            {
                exercises.map(exercise => <Exercise
                    exercise={exercise}
                    key={exercise.id}
                    handleAddToList={handleAddToList}
                ></Exercise>)
            }
        </div>
    );
};

export default Exercises;