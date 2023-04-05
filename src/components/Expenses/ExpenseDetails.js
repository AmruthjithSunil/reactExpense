import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated!");
    console.log("clicked");
  };

  const addHandler = () => {
    setAmount(100);
  };

  return (
    <>
      <div>{props.locationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={addHandler}>to 100</button>
    </>
  );
};

export default ExpenseDetails;
