import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  ];

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem expense={expense} />
  ));

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
