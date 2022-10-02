import React from "react";
import styles from "./ChartBar.module.css";

const ChartBar = function (props) {
  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = Math.round((props.amount / props.max) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__bar"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className={styles["chart-bar__name"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
