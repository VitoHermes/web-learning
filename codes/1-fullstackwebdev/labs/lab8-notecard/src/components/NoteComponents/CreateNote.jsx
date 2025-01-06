
import '../styles/Note.css';
import { LinearProgress } from '@mui/material';
export default function CreateNote({ handleAddNote, handleChange, inputText }) {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    return (
        <div className="note">
            <textarea
                cols={30}
                rows={5}
                className="note__textarea"
                value={inputText}
                onChange={handleChange}
                placeholder="Type to add a note..."
                maxLength={charLimit}
            ></textarea>
            <div className="note__footer">
                <span className="note__char-left">{charLeft} Left</span>
                <button className="note__save" onClick={handleAddNote}>Save</button>
            </div>
            <LinearProgress
                className="note__progress"
                value={charLeft}
                variant="determinate"
            />
        </div>
    )

}