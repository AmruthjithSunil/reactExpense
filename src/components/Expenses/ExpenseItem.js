import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        locationOfExpenditure={expense.locationOfExpenditure}
        title={expense.title}
        amount={expense.amount}
      />
    </Card>
  );
}

export default ExpenseItem;
