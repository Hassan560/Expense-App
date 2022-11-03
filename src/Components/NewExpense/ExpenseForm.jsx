import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [hideNewExpense, setHideNewExpense] = useState(false);

  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const expenseDataHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    const { expenseTitle, expenseAmount, expenseDate } = userInput;
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({ expenseTitle: "", expenseAmount: "", expenseDate: "" });
    setHideNewExpense(false);
  };

  return (
    <>
      {/* {hideNewExpense ? (
        <button onClick={() => setHideNewExpense(false)}>Add New Expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                name="expenseTitle"
                value={userInput.expenseTitle}
                onChange={expenseDataHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                name="expenseAmount"
                value={userInput.expenseAmount}
                onChange={expenseDataHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-01-01"
                name="expenseDate"
                value={userInput.expenseDate}
                onChange={expenseDataHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={() => setHideNewExpense(true)}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form> */}
      {/* )} */}
      {hideNewExpense === false && (
        <button onClick={() => setHideNewExpense(true)}>Add New Expense</button>
      )}
      {hideNewExpense === true && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                name="expenseTitle"
                value={userInput.expenseTitle}
                onChange={expenseDataHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                name="expenseAmount"
                value={userInput.expenseAmount}
                onChange={expenseDataHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-01-01"
                name="expenseDate"
                value={userInput.expenseDate}
                onChange={expenseDataHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={() => setHideNewExpense(false)}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
