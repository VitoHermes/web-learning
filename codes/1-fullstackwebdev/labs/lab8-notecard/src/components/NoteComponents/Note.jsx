import DeleteIcon from '@mui/icons-material/Delete';

export default function Note({ note, handleDeleteNote, handleDragEnd }) {
    const handleDrop = (e) => {
        const draggedId = e.dataTransfer.getData('text/plain');
        handleDragEnd(draggedId, note.id);
    };

    return (
        <div
            className="note"
            draggable="true"
            onDragStart={(e) => e.dataTransfer.setData('text/plain', note.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <div className="note__body">{note.text}</div>
            <div className="note__footer">
                <DeleteIcon className='note__delete' onClick={() => handleDeleteNote(note.id)} />
            </div>
        </div>
    );
}  