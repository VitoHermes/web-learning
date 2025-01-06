export default function AppReducer(state, action) {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload
                    //edux 中 action 对象的一个属性。它通常用于传递需要更新状态的数据。
                    //在这个特定的例子中，action.payload 代表要删除的交易的 id。
                )
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
                // 新添加的在前面
            }
        default:
            return state;
    }
}