import React from "react";

import ExpenseItems from "./ExpenseItems";

import "./ExpenseList.css";

const ExpenseLists = (props) => {
  if (props.filterExpense.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filterExpense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseLists;
