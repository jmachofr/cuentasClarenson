import { useNavigate } from 'react-router-dom';
import './NewExpense.css';

const NewExpense = () => {
  const navigate = useNavigate();

  return (
    <div className="new-expense-container">
      <h1>Create a New Expense</h1>
      <form className="expense-form">
        <input type="text" placeholder="Expense Name" />
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Paid by" />
        <br />
        <button type="submit">Add Expense</button>
      </form>
      <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default NewExpense;
