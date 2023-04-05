import "./ExpenseItem.css";

function ExpenseDetails({ locationOfExpenditure, title, amount }) {
  const clickHandler = () => {
    console.log("clicked");
  };

  const deleteHandler = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <>
      <div>{locationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </>
  );
}

export default ExpenseDetails;
