import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddFood from './components/AddFood/AddFood';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddExercise from './components/AddExercise/AddExercise';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-food/:mealType" element={<AddFood />} />
          {/* <Route path="/add-exercise/:exerciseType" element={<AddExercise />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
