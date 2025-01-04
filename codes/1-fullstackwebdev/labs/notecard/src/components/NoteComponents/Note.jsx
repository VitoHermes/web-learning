import DeleteIcon from '@mui/icons-material/Delete';
export default function Note({ note, handleDeleteNote }) {
    return (
        <div className="note">
            <div className="note__body">{note.text}</div>
            <div className="note__footer">
                <DeleteIcon className='note__delete' onClick={() => handleDeleteNote(note.id)} />
            </div>
        </div>
    )
}  