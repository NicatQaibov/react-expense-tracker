import React, { useState } from "react";
import logo from "./logo.svg";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY__EXPENSES = [
  { id: "e1", name: "PC", price: 2250, date: new Date(2022, 8, 26) },
  { id: "e1", name: "Laptop", price: 400, date: new Date(2019, 8, 26) },
  { id: "e2", name: "PS4", price: 650, date: new Date(2021, 11, 31) },
  {
    id: "e3",
    name: "Iphone",
    price: 1500,
    date: new Date(2022, 10, 8),
  },
  {
    id: "e4",
    name: "Sneakers",
    price: 120,
    date: new Date(2020, 9, 12),
  },
  {
    id: "e5",
    name: "Car Insurance",
    price: 400.5,
    date: new Date(2022, 10, 12),
  },
  {
    id: "e6",
    name: "Headphone",
    price: 75,
    date: new Date(2022, 5, 30),
  },
  {
    id: "e7",
    name: "Parfume",
    price: 200,
    date: new Date(2019, 10, 8),
  },
  {
    id: "e8",
    name: "Car Service",
    price: 100,
    date: new Date(2022, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);

  const addNewExpenseHandler = function (expense) {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
