import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./ExpenseChart.module.css";
import ChartBar from "./ChartBar/ChartBar";

const ExpenseChart = function (props) {
  const dataPoints = [];

  props.monthsData.map((monthData) => {
    dataPoints.push(monthData.amount);
  });

  const max = Math.max(...dataPoints);

  return (
    <Card className={styles["expense-chart"]}>
      {props.monthsData.map((month) => {
        return (
          <ChartBar
            key={month.label}
            label={month.label}
            amount={month.amount}
            max={max}
          />
        );
      })}
    </Card>
  );
};
export default ExpenseChart;
