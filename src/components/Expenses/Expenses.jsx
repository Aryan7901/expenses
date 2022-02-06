import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ListExpenses from "./ListExpenses";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
  const [filterYear, setYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ListExpenses expenses={filterExpenses} />
    </Card>
  );
}
export default Expenses;
