import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteFood } from '../../redux/foodSlice';
import { useDispatch } from 'react-redux';
import { fetchFood } from '../../redux/foodSlice';
import { fetchExercise } from '../../redux/exerciseSlice';
import './RecordList.css';

function RecordList() {
    const foods = useSelector(state => state.food);
    const exercises = useSelector(state => state.exercise);
    const dispatch = useDispatch();

    useEffect(() => {
        if (foods.length === 0) {
            dispatch(fetchFood());
        }
        if (exercises.length === 0) {
            dispatch(fetchExercise());
        }
    }, [dispatch]);

    const deleteRecord = (index) => {
        dispatch(deleteFood(index));
    };

    return (
        <div className='record-list-container'>
            <ul>
                {foods.length > 0 ? foods.map((record, index) => (
                    <li key={index}>
                        {record.name} - {record.calories} - {record.mealType}
                        <button onClick={() => deleteRecord(index)}>Delete</button>
                    </li>
                )) : <li>No food records found</li>}
            </ul>
        </div>
    );
}

export default RecordList;
