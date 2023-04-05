const ExpenseForm = () => {
  const changeHandler = (e) => {
    console.log(e.nativeEvent.data);
  };

  return (
    <form onChange={changeHandler}>
      <label for="title">Expense Title:</label>
      <input type="text" id="title" name="title"></input>
      <label for="amount">Expense Amount:</label>
      <input type="number" id="amount" name="amount"></input>
      <label for="date">Date:</label>
      <input type="date" id="date" name="date"></input>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
