import React from "react";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = function (props) {
  const date__day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const date__month = props.date.toLocaleString("en-US", { month: "short" });
  const date__year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className={`${styles["expense-date"]}`}>
      <div className={`${styles["expense-date--month"]}`}>{date__month}</div>
      <div className={`${styles["expense-date--year"]}`}>{date__year}</div>
      <div className={`${styles["expense-date--day"]}`}>{date__day}</div>
    </div>
  );
};

export default ExpenseDate;
