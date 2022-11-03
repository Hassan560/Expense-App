import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";

// styling
import "../Expenses/ExpenseItems.css";

const ExpenseItems = (props) => {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItems;
