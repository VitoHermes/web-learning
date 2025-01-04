import logo from './logo.svg';
import './components/styles/App.css';
import Header from './components/NoteComponents/Header';
import Notes from './components/NoteComponents/Notes';
import CreateNote from './components/NoteComponents/CreateNote';


export default function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}