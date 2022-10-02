import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";
import Button from "../../UI/Button/Button";
const ExpenseForm = function (props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const changeTitleHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };
  const changeAmountHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  };
  const changeDateHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    // prevents reloading the page as the result of submission of form.
    event.preventDefault();
    props.onClick();
    // if any of the blanks are not filled, return immediately.
    if (
      !userInput.enteredDate ||
      !userInput.enteredAmount ||
      !userInput.enteredTitle
    )
      return;
    const enteredUser = {
      name: userInput.enteredTitle,
      price: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    console.log(enteredUser);
    props.onSaveExpense(enteredUser);

    // reset the values of form controls.
    userInput.enteredAmount = "";
    userInput.enteredTitle = "";
    userInput.enteredDate = "";
  };

  return (
    <form className={styles["expense-form"]} onSubmit={formSubmitHandler}>
      <div className={styles["expense-form__controls"]}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={userInput.enteredTitle}
          className={styles["expense-form__control"]}
          onChange={changeTitleHandler}
        />
      </div>
      <div className={styles["expense-form__controls"]}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={userInput.enteredAmount}
          min="0.01"
          step="0.01"
          className={styles["expense-form__control"]}
          onChange={changeAmountHandler}
        />
      </div>
      <div className={styles["expense-form__controls"]}>
        <label className="date" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={userInput.enteredDate}
          min="2019-09-11"
          max="2022-12-31"
          className={styles["expense-form__control"]}
          onChange={changeDateHandler}
        />
      </div>
      <div className={styles["expense-form__controls"]}>
        <Button className={styles["btn--add-expense"]} type="submit">
          add expense
        </Button>
      </div>
    </form>
  );
};
export default ExpenseForm;
