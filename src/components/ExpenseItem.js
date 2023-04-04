import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        locationOfExpenditure={expense.locationOfExpenditure}
        title={expense.title}
        amount={expense.amount}
      />
    </div>
  );
}

export default ExpenseItem;
