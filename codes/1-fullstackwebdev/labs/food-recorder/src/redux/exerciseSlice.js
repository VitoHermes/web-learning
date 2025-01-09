import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fakeExerciseAPI from '../api/fakeAPIgetExercise';

// async thunks
export const fetchExercise = createAsyncThunk('exercise/fetchExercise', async () => {
    try {
        const response = await fakeExerciseAPI.fetchExercise();
        return response;
    } catch (error) {
        console.error('Failed to fetch exercise', error);
        throw new Error('Failed to fetch exercise');
    }
});

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: [],
    reducers: {
        addExercise: (state, action) => {
            state.push({
                id: Math.max(...state.map((b) => b.id)) + 1,
                ...action.payload,
            });
        },
        deleteExercise: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        },
        updateExercise: (state, action) => {
            const index = state.findIndex((e) => e.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExercise.fulfilled, (state, action) => {
            return [...action.payload];
        }).addCase(fetchExercise.rejected, (state, action) => {
            console.error('Failed to fetch exercise', action.error);
            return state;
        });
    },
});

export const { addExercise, deleteExercise, updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
