import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fakeFoodAPI from '../api/fakeAPIgetFood';

// async thunks
export const fetchFood = createAsyncThunk('food/fetchFood', async () => {
    try {
        const response = await fakeFoodAPI.fetchFood();
        return response;
    } catch (error) {
        console.error('Failed to fetch food', error);
        throw new Error('Failed to fetch food');
    }
});

const foodSlice = createSlice({
    name: 'food',
    initialState: [],
    reducers: {
        addFood: (state, action) => {
            const maxId = state.length > 0 ? Math.max(...state.map((b) => b.id)) : 0;
            state.push({
                id: maxId + 1,
                ...action.payload,
            });
        },
        deleteFood: (state, action) => {
            console.log('food is deleted', action.payload);
            return state.filter((b) => b.id !== action.payload);
        },
        updateFood: (state, action) => {
            const index = state.findIndex((b) => b.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFood.fulfilled, (state, action) => {
            return [...action.payload];
        }).addCase(fetchFood.rejected, (state, action) => {
            console.error('Failed to fetch food', action.error);
            return state;
        });
    },
});

export const { addFood, deleteFood, updateFood } = foodSlice.actions;
export default foodSlice.reducer;
