import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function onSave(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAdd(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSave} />
    </div>
  );
}
export default NewExpense;
