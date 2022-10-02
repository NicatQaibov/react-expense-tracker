import React from "react";
import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const changeYearHandler = function (event) {
    const year = event.target.value;
    props.onChangeList(year);
  };
  return (
    <div className={styles["expense-filter"]}>
      <label htmlFor="years">Filter by year</label>
      <select name="years" onChange={changeYearHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
