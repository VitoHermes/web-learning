import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFood } from '../../redux/foodSlice';
import { fetchExercise } from '../../redux/exerciseSlice';
import './Calorie.css';

function Calorie() {
    const foods = useSelector(state => state.food);
    const exercises = useSelector(state => state.exercise);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFood());
        dispatch(fetchExercise());
    }, [dispatch]);

    const intakeCalories = foods.reduce((acc, food) => acc + food.calories, 0);
    const burnedCalories = exercises.reduce((acc, exercise) => acc + exercise.calories, 0);
    const netCalories = intakeCalories - burnedCalories;


    return (
        <div className='calorie-container'>
            <p className='calorie-title'>热量</p>
            <p className='calorie'>{netCalories} 千卡</p>
        </div>
    );
}

export default Calorie;
