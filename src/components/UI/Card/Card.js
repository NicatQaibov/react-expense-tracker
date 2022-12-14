import React, { Fragment } from "react";
import styles from "./Card.module.css";

const Card = function (props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
