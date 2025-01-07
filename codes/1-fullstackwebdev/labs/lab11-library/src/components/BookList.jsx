import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteBook, fetchBooks } from '../redux/bookSlice';

export default function BookList() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    useEffect(() => {
        console.log('Books:', books);
    }, [books]);

    return (
        <div>
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
