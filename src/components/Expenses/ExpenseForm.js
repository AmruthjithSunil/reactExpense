import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseSave }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onExpenseSave(expense);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  return (
    <>
      <form onSubmit={submitHandler}>
        <label for="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={enteredTitle}
          onChange={changeTitleHandler}
        ></input>
        <label for="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={enteredAmount}
          onChange={changeAmountHandler}
        ></input>
        <label for="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={enteredDate}
          onChange={changeDateHandler}
        ></input>
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;
