import React, { useState } from "react";

// components
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseLists from "./ExpenseLists";
import ExpenseChart from "./ExpenseChart";

import "../Expenses/Expense.css";

const Expense = (props) => {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  const filterExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // let expenseContent = <p>No Expense Found.</p>;

  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((expense) => {
  //     return (
  //       <ExpenseItems
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpense} />
      <ExpenseLists filterExpense={filterExpense} />
      {/* {expenseContent} */}
      {/* {filterExpense.length === 0 && <p>No Expense Found.</p>}
      {filterExpense.length > 0 &&
        filterExpense.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
    </Card>
  );
};
export default Expense;
