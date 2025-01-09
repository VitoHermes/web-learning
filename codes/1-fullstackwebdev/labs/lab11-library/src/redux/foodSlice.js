import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fakeAPI from '../fakeAPI';

// async thunks
export const fetchFoods = createAsyncThunk('food/fetchFood', async () => {
    try {
        const response = await fakeAPI.fetchFoods();
        return response;
    } catch (error) {
        console.error('Failed to fetch foods', error);
        throw new Error('Failed to fetch foods');
    }
});

const foodSlice = createSlice({
    name: 'food',
    initialState: [],
    reducers: {
        addFood: (state, action) => {
            state.push({
                id: Math.max(...state.map((f) => f.id)) + 1,
                ...action.payload,
            });
        },
        deleteFood: (state, action) => {
            return state.filter((f) => f.id !== action.payload);
        },
        updateFood: (state, action) => {
            const index = state.findIndex((f) => f.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            return [...action.payload];
        }).addCase(fetchFoods.rejected, (state, action) => {
            console.error('Failed to fetch foods', action.error);
            return state;
        });
    },
});

export const { addFood, deleteFood, updateFood } = foodSlice.actions;
export default foodSlice.reducer;

