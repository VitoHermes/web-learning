
import Addbook from './components/AddBook';
import BookList from './components/BookList';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='container'>
          <h1 className="title">Book Library</h1>
          <a href="/">Food</a>
          <Addbook />
          <BookList />
        </div>
      </div>
    </Provider>
  );
}

export default App;