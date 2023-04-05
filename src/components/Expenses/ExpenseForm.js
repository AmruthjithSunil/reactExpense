import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
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
      <form>
        <label for="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={changeTitleHandler}
        ></input>
        <label for="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={changeAmountHandler}
        ></input>
        <label for="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={changeDateHandler}
        ></input>
        <button type="submit">Add Expense</button>
      </form>
      <p>
        {enteredTitle} {enteredAmount} {enteredDate}
      </p>
    </>
  );
};

export default ExpenseForm;
