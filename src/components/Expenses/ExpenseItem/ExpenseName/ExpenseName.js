import React from "react";
import styles from "./ExpenseName.module.css";

const ExpenseName = function (props) {
  return <div className={`${styles["expense-name"]}`}>{props.name}</div>;
};

export default ExpenseName;
