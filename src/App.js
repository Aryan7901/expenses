import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
function App() {
  // const initialExpenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [expenses, setExpenses] = useState([]);
  function onAdd(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses((expenses) => {
      const newExpenses = [expenseData, ...expenses];
      return newExpenses;
    });
  }
  return (
    <div className="App">
      <NewExpense onAdd={onAdd} />
      <Chart expenses={expenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
