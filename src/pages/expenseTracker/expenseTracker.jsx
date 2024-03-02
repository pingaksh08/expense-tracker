import React, { useState } from "react";
import { Row, Col, Form, Button } from "antd";
import useExpenseTrackerHook from "./hooks/useExpenseTrackerHook";
import useGetTransactionHook from "./hooks/useGetTransactionHook";
import TransactionList from "../transactionList/transactionList";
import { useUserInfoHook } from "./hooks/useUserInfoHook";

const ExpenseTracker = () => {
  const { handleAddTransaction } = useExpenseTrackerHook();
  const { transactions, balanceAmount, incomeAmount, expenseAmount } =
    useGetTransactionHook();
  const { name } = useUserInfoHook();
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [transactionAmount, setTransactionAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTransaction({
      description: description,
      transactionAmount: transactionAmount,
      transactionType: transactionType,
    });
    setDescription("");
    setTransactionAmount(0);
    setTransactionType("expense");
  };

  return (
    <div className="expense-tracker grid-container">
      <main className="container">
        <header className="header">{name}'s Expense Tracker</header>
        <article className="balance-titles">
          {/* Summary section */}
          <figure>
            Balance :<div className="balance-total">{balanceAmount} INR</div>{" "}
          </figure>
          <figure>
            Income : <div className="income-total"> {incomeAmount} INR</div>{" "}
          </figure>
          <figure>
            Expense : <div className="expense-total"> {expenseAmount} INR</div>
          </figure>
        </article>

        {/* add transaction section */}
        <article className="add-transaction">
          <Form>
            <Row gutter={[8, 8]}>
              <Col>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Col>
              <Col>
                <input
                  type="number"
                  placeholder="Amount"
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col>
                <input
                  type="radio"
                  id="expense"
                  value="expense"
                  checked={transactionType === "expense"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="Expense">Expense</label>
              </Col>
              <Col>
                <input
                  type="radio"
                  id="income"
                  value="income"
                  checked={transactionType === "income"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="Income">Income</label>
              </Col>
            </Row>

            <Button type="default" onClick={onSubmit}>
              Add Transaction
            </Button>
          </Form>
        </article>
      </main>

      {/* transaction list */}

      <aside className="container transactions-list">
        <h3>All Transactions</h3>
        <TransactionList transactions={transactions} />
      </aside>
    </div>
  );
};

export default ExpenseTracker;
