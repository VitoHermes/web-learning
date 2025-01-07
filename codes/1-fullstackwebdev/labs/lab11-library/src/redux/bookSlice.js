import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fakeAPI from '../fakeAPI';

// async thunks
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    try {
        const response = await fakeAPI.fetchBooks();
        return response;
    } catch (error) {
        console.error('Failed to fetch books', error);
        throw new Error('Failed to fetch books');
    }
});

const booksSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push({
                id: Math.max(...state.map((b) => b.id)) + 1,
                ...action.payload,
            });
        },
        deleteBook: (state, action) => {
            return state.filter((b) => b.id !== action.payload);
        },
        updateBook: (state, action) => {
            const index = state.findIndex((b) => b.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            return [...action.payload];
        }).addCase(fetchBooks.rejected, (state, action) => {
            console.error('Failed to fetch books', action.error);
            return state;
        });
    },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;

