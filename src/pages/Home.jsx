import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../images/logo-main.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-logo">
          <img src={logo} alt="Home Logo" />
        </div>
        <div className='home-title'>
          <span>Cuentas</span>
          <span>Clarenson</span>
        </div>
      </div>
      <div className="home-buttons">
        <button onClick={() => navigate('/new-expense')}>New Expense</button>
        <button onClick={() => navigate('/expense-history')}>Previous Expenses</button>
      </div>
    </div>
  );
};

export default Home;
