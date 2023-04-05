import "./FilterExpense.css";

const FilterExpense = ({ onFilterChange }) => {
  const changeHandler = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <>
      <label>Filter By Year:</label>

      <select onChange={changeHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </>
  );
};

export default FilterExpense;
