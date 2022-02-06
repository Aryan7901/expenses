import ExpenseItem from "./ExpenseItem";
import "./ListExpenses.css";
function ListExpenses(props) {
  if (props.expenses.length === 0) {
    return <p className="expenses-list__fallback">No Expenses in This Year</p>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ListExpenses;
