import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './bookSlice';

const store = configureStore({

    reducer: {
        books: booksSlice,
    },
    devTools: true

});

export default store;
