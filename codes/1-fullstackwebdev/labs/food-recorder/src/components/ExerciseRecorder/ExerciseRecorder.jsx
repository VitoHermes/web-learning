import React, { useState } from 'react';

function ExerciseRecorder() {
    const [exercises, setExercises] = useState([]);

    const addExercise = (exercise) => {
        setExercises([...exercises, exercise]);
    };

    return (
        <div>
            <h2>Exercise Recorder</h2>
            <button onClick={() => addExercise({ name: 'Running', duration: 30, calories: 300 })}>
                Add Exercise
            </button>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>
                        {exercise.name} - {exercise.duration} mins - {exercise.calories} kcal
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExerciseRecorder; 