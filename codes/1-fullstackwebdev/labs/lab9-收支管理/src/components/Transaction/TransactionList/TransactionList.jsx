import TransactionItem from '../TransactionItem/TransactionItem';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-700 mt-4">交易记录</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction} />
                ))}
            </ul>
        </div>
    );
}
