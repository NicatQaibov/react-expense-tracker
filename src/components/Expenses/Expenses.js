import React, { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import styles from "./Expenses.module.css";
const MONTHS_DATA = [
  { label: "Jan", amount: 0 },
  { label: "Feb", amount: 0 },
  { label: "Mar", amount: 0 },
  { label: "Apr", amount: 0 },
  { label: "May", amount: 0 },
  { label: "Jun", amount: 0 },
  { label: "Jul", amount: 0 },
  { label: "Aug", amount: 0 },
  { label: "Sep", amount: 0 },
  { label: "Oct", amount: 0 },
  { label: "Nov", amount: 0 },
  { label: "Dec", amount: 0 },
];

const Expenses = function (props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  let monthsData = [
    { label: "Jan", amount: 0 },
    { label: "Feb", amount: 0 },
    { label: "Mar", amount: 0 },
    { label: "Apr", amount: 0 },
    { label: "May", amount: 0 },
    { label: "Jun", amount: 0 },
    { label: "Jul", amount: 0 },
    { label: "Aug", amount: 0 },
    { label: "Sep", amount: 0 },
    { label: "Oct", amount: 0 },
    { label: "Nov", amount: 0 },
    { label: "Dec", amount: 0 },
  ];

  const changeListHandler = function (year) {
    setSelectedYear(year);
    monthsData = [
      { label: "Jan", amount: 0 },
      { label: "Feb", amount: 0 },
      { label: "Mar", amount: 0 },
      { label: "Apr", amount: 0 },
      { label: "May", amount: 0 },
      { label: "Jun", amount: 0 },
      { label: "Jul", amount: 0 },
      { label: "Aug", amount: 0 },
      { label: "Sep", amount: 0 },
      { label: "Oct", amount: 0 },
      { label: "Nov", amount: 0 },
      { label: "Dec", amount: 0 },
    ];
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return +selectedYear === expense.date.getFullYear();
  });

  filteredExpenses.forEach((expense) => {
    monthsData[expense.date.getMonth()].amount += +expense.price;
  });
  console.log(monthsData);
  return (
    <Card className={`${styles["expense-list"]}`}>
      <ExpenseFilter onChangeList={changeListHandler} />
      <ExpenseChart expenses={props.expenses} monthsData={monthsData} />
      <ExpenseList year={selectedYear} filteredExpenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
