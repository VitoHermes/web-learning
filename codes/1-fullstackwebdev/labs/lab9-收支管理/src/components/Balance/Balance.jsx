import { GlobalContext } from '../../context/GlobalState';
import { useContext, useEffect, useState } from 'react';
import './Balance.css';

export default function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        setTotal(total);
    }, [transactions]);

    return (
        <div>
            <h4 className="balance-title">Your Balance</h4>
            <h1 className="balance-text">${total}</h1>
        </div>
    );
}