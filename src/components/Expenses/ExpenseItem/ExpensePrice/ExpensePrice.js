import React from "react";
import styles from "./ExpensePrice.module.css";

const ExpensePrice = function (props) {
  return (
    <div className={styles["expense-price"]}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(props.price)}
    </div>
  );
};
export default ExpensePrice;
