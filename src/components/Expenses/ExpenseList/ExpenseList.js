import React, { useEffect } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import styles from "./ExpenseList.module.css";

const ExpenseList = function (props) {
  const noExpenses = <h2 className={styles["no-item"]}>Found no item.</h2>;

  if (!props.filteredExpenses.length) return noExpenses;

  const expenseItems = props.filteredExpenses.map((expense, index) => {
    return (
      <ExpenseItem
        key={Math.random()}
        name={expense.name}
        price={expense.price}
        date={expense.date}
      />
    );
  });

  return expenseItems;
};
export default ExpenseList;
