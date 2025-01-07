
import Addbook from './components/Addbook';
import BookList from './components/BookList';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Library</h1>
        <Addbook />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
