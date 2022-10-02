import React from "react";
import Card from "../../UI/Card/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import ExpensePrice from "./ExpensePrice/ExpensePrice";
import ExpenseName from "./ExpenseName/ExpenseName";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <Card className={`${styles["expense-item"]}`}>
      <ExpenseDate date={props.date} />
      <ExpenseName name={props.name} />
      <ExpensePrice price={props.price} />
    </Card>
  );
};
export default ExpenseItem;
