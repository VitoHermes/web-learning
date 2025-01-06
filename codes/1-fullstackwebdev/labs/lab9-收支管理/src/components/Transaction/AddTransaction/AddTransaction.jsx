import React, { useState, useContext } from 'react';
import { addTransaction } from '../../../context/AppReducer';
import { GlobalContext } from '../../../context/GlobalState';

export default function TransactionPop({ isOpen, setIsOpen }) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const [error, setError] = useState('');
    const { transactions, addTransaction } = useContext(GlobalContext);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        if (text.trim() === '' || amount.trim() === '') {
            setError('请输入交易内容和金额');
            return;
        }
        if (isNaN(amount)) {
            setError('请输入有效的金额');
            return;
        }
        const sign = type === 'income' ? 1 : -1;
        addTransaction({
            id: transactions.length + 1,
            text,
            amount: sign * +amount,
        });

        setText('');
        setAmount('');
        setType('income');
        handleClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">添加交易</h2>
                <p className="mb-4">请输入交易内容和金额。</p>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                >
                    <option value="income">收入</option>
                    <option value="expense">支出</option>
                </select>
                <input
                    type="text"
                    placeholder="交易内容"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="金额"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        关闭
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        提交
                    </button>
                </div>
            </div>
        </div>
    );
}