import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";
import FilterExpense from "./components/Expenses/FilterExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
      locationOfExpenditure: "Mumbai",
    },
    {
      id: 2,
      date: new Date(2020, 3, 28),
      title: "Driving License",
      amount: 100.07,
      locationOfExpenditure: "Delhi",
    },
    {
      id: 3,
      date: new Date(2021, 2, 20),
      title: "Honeymoon",
      amount: 1298.62,
      locationOfExpenditure: "Goa",
    },
    {
      id: 4,
      date: new Date(2021, 10, 28),
      title: "Education Loan",
      amount: 10294.67,
      locationOfExpenditure: "Banglore",
    },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const filterChangeHandler = (year) => {
    const temp = expenses.filter(
      (expense) => expense.date.getFullYear().toString() == year
    );
    setFilteredExpenses(temp);
  };

  const addExpense = (expense) => {
    setExpenses((expenses) => [expense, ...expenses]);
    console.log(expense);
  };

  // const expenseItems = filteredExpenses.length ? (
  //   filteredExpenses.map((expense) => (
  //     <ExpenseItem key={expense.id} expense={expense} />
  //   ))
  // ) : (
  //   <p>no lists</p>
  // );

  const expenseItems = filteredExpenses.map((expense) => (
    <ExpenseItem key={expense.id} expense={expense} />
  ));

  return (
    <div>
      <h2>Let's get started!</h2>
      <Card className="expenses">
        <ExpenseForm onExpenseSave={addExpense} />
        <FilterExpense onFilterChange={filterChangeHandler} />
        {expenseItems}
      </Card>
    </div>
  );
}

export default App;
