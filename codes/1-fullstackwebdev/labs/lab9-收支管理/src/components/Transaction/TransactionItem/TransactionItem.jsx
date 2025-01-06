import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";


export default function TransactionItem({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const { text, amount } = transaction;
    const sign = amount > 0 ? '+' : '-';
    return (
        <li className="group flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mt-4 relative">
            <span className="text-gray-700">{text}</span>
            <span className={`p-2 rounded-lg ${amount > 0 ? 'text-green-500' : 'text-red-500'}`}>{sign}${Math.abs(amount)}</span>
            <button
                className="w-6 h-6 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity absolute left-[calc(100%-1.5rem)]"
                onClick={() => deleteTransaction(transaction.id)}
            >x</button>
        </li>
    );
}