import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
      locationOfExpenditure: "Mumbai",
    },
    {
      date: new Date(2020, 3, 28),
      title: "Driving License",
      amount: 100.07,
      locationOfExpenditure: "Delhi",
    },
    {
      date: new Date(2021, 2, 20),
      title: "Honeymoon",
      amount: 1298.62,
      locationOfExpenditure: "Goa",
    },
    {
      date: new Date(2021, 10, 28),
      title: "Education Loan",
      amount: 10294.67,
      locationOfExpenditure: "Banglore",
    },
  ]);

  const addExpense = (expense) => {
    setExpenses((expenses) => [...expenses, expense]);
    console.log(expense);
  };

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem expense={expense} />
  ));

  return (
    <div>
      <h2>Let's get started!</h2>
      <Card className="expenses">
        <ExpenseForm onExpenseSave={addExpense} />
        {expenseItems}
      </Card>
    </div>
  );
}

export default App;
