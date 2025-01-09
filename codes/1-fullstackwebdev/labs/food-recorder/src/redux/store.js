import { configureStore } from '@reduxjs/toolkit';
import foodSlice from './foodSlice';
import exerciseSlice from './exerciseSlice';

const store = configureStore({
    reducer: {
        food: foodSlice,
        exercise: exerciseSlice,
    },
});

export default store;
