import { useNavigate } from 'react-router-dom';
import './ExpenseHistory.css';

const ExpenseHistory = () => {
  const navigate = useNavigate();

  const expenses = [
    { name: 'BBQ Meat', amount: 1500, paidBy: 'Alice' },
    { name: 'Drinks', amount: 800, paidBy: 'Bob' },
  ];

  return (
    <div className="history-container">
      <h1>Previous Expenses</h1>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Paid By</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.name}</td>
              <td>{exp.amount}</td>
              <td>{exp.paidBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default ExpenseHistory;

