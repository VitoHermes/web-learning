import './App.css';

import Balance from './components/Balance/Balance';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import Transaction from './components/Transaction/Transaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Balance />
        <IncomeExpense />
        <Transaction />
      </GlobalProvider>
    </div >
  );
}

export default App;
