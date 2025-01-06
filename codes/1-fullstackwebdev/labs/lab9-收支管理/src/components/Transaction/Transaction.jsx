import TransactionList from './TransactionList/TransactionList';
import AddTransaction from './AddTransaction/AddTransaction';
import { useState } from 'react';

export default function Transaction() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    return (
        <div>
            <TransactionList />
            <button
                className="
                bg-blue-500 text-white p-2 rounded-lg mt-6 hover:cursor-pointer
                hover:bg-blue-600
                hover:shadow-lg
                float-right
                "

                onClick={handleOpen}
            >添加交易</button>
            <AddTransaction isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
