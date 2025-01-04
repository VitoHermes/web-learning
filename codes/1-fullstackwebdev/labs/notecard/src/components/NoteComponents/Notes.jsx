import Note from './Note';
import '../styles/App.css';
import CreateNote from './CreateNote';
import { useState, useEffect } from 'react';
import '../styles/Note.css';
import { v4 as uuid } from 'uuid';
export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState('');


    // get text
    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    // add note
    const handleAddNote = () => {
        if (inputText.trim() !== '') {
            setNotes(prevNotes => [...prevNotes,
            {
                id: uuid(),
                text: inputText
            }
            ]);
            setInputText('');
        }
    }

    // delete note
    const handleDeleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }


    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const data = JSON.parse(localStorage.getItem('notes'));
        if (Array.isArray(data) && data.length > 0) {
            setNotes(data);
        }
        setLoading(false);
    }

    // useEffect to update localStorage when notes change
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="notes">
            {notes && notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <CreateNote handleAddNote={handleAddNote} handleChange={handleChange} inputText={inputText} />
        </div>
    )
}