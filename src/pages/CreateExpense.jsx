import { useNavigate } from 'react-router-dom';
import './CreateExpense.css';

const createExpense = () => {
  const navigate = useNavigate();

  return (
    <div className="new-expense-container">
      <div className="new-expense-title">
        <span>Nueva</span>
        <span>Cuenta Clara</span>
      </div>
      <div className="new-expense-form">
        <form className="new-expense-form">
          <input type="text" placeholder="Expense Name" />
        </form>
      </div>
      <div className="new-expense-buttons">
        <button type="submit" className="create-button">Crear</button>
        <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default createExpense;
