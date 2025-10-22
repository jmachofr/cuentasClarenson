import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Home Menu</h1>
      <div className="home-buttons">
        <button onClick={() => navigate('/new-expense')}>New Expense</button>
        <button onClick={() => navigate('/expense-history')}>Previous Expenses</button>
      </div>
    </div>
  );
};

export default Home;
