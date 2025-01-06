import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './IncomeExpense.css';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        const amounts = transactions.map(transaction => transaction.amount);
        const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
        const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
        setIncome(income);
        setExpense(expense);
    }, [transactions]);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
            <div className="flex gap-1">
                <div className="text-center w-1/2">
                    <h4 className="text-lg font-semibold text-gray-700">收入</h4>
                    <p className="text-green-500 text-xl font-bold">${income}</p>
                </div>
                <div className="border-l border-gray-300 mx-4"></div>
                <div className="text-center w-1/2">
                    <h4 className="text-lg font-semibold text-gray-700">支出</h4>
                    <p className="text-red-500 text-xl font-bold">${expense}</p>
                </div>
            </div>
        </div>
    );
}

export default IncomeExpense;