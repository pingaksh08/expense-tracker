import React, { useState } from 'react'
import useExpenseTrackerHook from './hooks/useExpenseTrackerHook'
import useGetTransactionHook from './hooks/useGetTransactionHook';
import TransactionList from '../transactionList/transactionList';
import { useUserInfoHook } from './hooks/useUserInfoHook';

const ExpenseTracker = () => {

  const { handleAddTransaction } = useExpenseTrackerHook();
  const { transactions, balanceAmount, incomeAmount, expenseAmount } = useGetTransactionHook();
  const { name } = useUserInfoHook()
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [transactionAmount, setTransactionAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTransaction({ description: description, transactionAmount: transactionAmount, transactionType: transactionType });
    setDescription("");
    setTransactionAmount(0);
    setTransactionType("expense");
  }

  return (
    <div className='expense-tracker'>

      { /* Summary section */}

      <div className='container'>
        <h1>{name}'s Expense Tracker</h1>
        <div className='balance'> <h2>Balance : ${balanceAmount} </h2></div>
        <div className='summary'>
          <div className='income'><h3>Income : ${incomeAmount} </h3></div>
          <div className='expense'><h3>Expense : ${expenseAmount} </h3></div>
        </div>

        { /* add transaction section */}

        <form className='add-transaction' onSubmit={onSubmit}>
          <input type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)} required />
          <input type='number' placeholder='Amount' onChange={(e) => setTransactionAmount(e.target.value)} required />
          <input type='radio' id='expense' value='expense' checked={transactionType === "expense"} onChange={(e) => setTransactionType(e.target.value)} /> <label htmlFor='Expense'>Expense</label>
          <input type='radio' id='income' value='income' checked={transactionType === "income"} onChange={(e) => setTransactionType(e.target.value)} /><label htmlFor='Income'>Income</label>
          <button type='submit' >Add Transaction</button>
        </form>

        { /* transaction list */}
        <div className='transactions'>
          <h3>Transactions</h3>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker