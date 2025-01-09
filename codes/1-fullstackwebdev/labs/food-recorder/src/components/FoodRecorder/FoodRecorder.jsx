import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodRecorder.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { addFood } from '../../redux/foodSlice';
import { useDispatch } from 'react-redux';
import './FoodRecorder.css';


function FoodRecorder() {
    const navigate = useNavigate();
    const navigateToAddFood = (mealType) => {
        navigate(`/add-food/${mealType}`);
    };

    //test
    const dispatch = useDispatch();
    const mealType = 'breakfast';
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');



    return (

        <div className='food-recorder-container'>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <button onClick={() => navigateToAddFood('breakfast')}>早餐</button>
                <button onClick={() => navigateToAddFood('lunch')}>午餐</button>
                <button onClick={() => navigateToAddFood('dinner')}>晚餐</button>
                <button onClick={() => navigateToAddFood('snacks')}>零食</button>
            </div>
        </div>

    );
}

export default FoodRecorder;
