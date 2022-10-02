import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./NewExpense.module.css";
const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const saveExpenseHandler = (expenseData) => {
    const expense = {
      id: Math.random().toString(),
      ...expenseData,
    };
    console.log(expense);
    props.onAddExpense(expense);
  };
  const toggleFormHandler = function () {
    setIsFormOpen((prevValue) => {
      return prevValue ? false : true;
    });
    console.log(isFormOpen);
  };

  return (
    <Card className={styles["new-expense"]}>
      {!isFormOpen ? (
        <Button
          className={styles["btn--add-new-expense"]}
          onClick={toggleFormHandler}
        >
          add new expense
        </Button>
      ) : (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onClick={toggleFormHandler}
        />
      )}
    </Card>
  );
};
export default NewExpense;
