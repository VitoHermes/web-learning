import React, { useState } from 'react';
import { addFood } from '../../redux/foodSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddFood.css';

function AddFood() {
    const dispatch = useDispatch();
    const { mealType } = useParams();
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [errors, setErrors] = useState({ foodName: '', calories: '' });
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate(`/`);
    };

    const validateInputs = () => {
        let valid = true;
        let newErrors = { foodName: '', calories: '' };

        if (!foodName.trim()) {
            newErrors.foodName = '食物名称不能为空';
            valid = false;
        }

        if (!calories || isNaN(calories) || Number(calories) <= 0) {
            newErrors.calories = '卡路里必须是正数';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const addFoodItem = () => {
        if (validateInputs()) {
            setFoods([...foods, {
                name: foodName,
                calories,
                mealType
            }]);
            setFoodName('');
            setCalories('');
            setErrors({ foodName: '', calories: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        foods.forEach(food => {
            console.log('food is added', food);
            dispatch(addFood(food));
        });
        navigateToHome();
    };

    const handleDelete = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>添加食物 - {mealType}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="食物名称"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                />
                {errors.foodName && <span className="error">{errors.foodName}</span>}
                <input
                    type="number"
                    placeholder="卡路里"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
                {errors.calories && <span className="error">{errors.calories}</span>}
                <button type="button" onClick={addFoodItem}>添加食物</button>
                <button type="submit">提交</button>
            </form>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} className='food-item'>
                        {food.name} - {food.calories} 卡路里
                        <button onClick={() => handleDelete(index)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddFood;