import { useState } from 'react';
import { addBook } from '../redux/bookSlice';
import { useDispatch } from 'react-redux';
import './AddBook.css';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ title, author, description }));
        setTitle('');
        setAuthor('');
        setDescription('');

    };

    return (
        <div className="add-book">
            <h2 className='add-book-title'>Add book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <button type="submit">Add book</button>
            </form>
        </div>
    );
}