import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import './NewExpense.css';

const NewExpense = () => {
  const navigate = useNavigate();
   
  const [step, setStep] = useState(1);
  const [expenseName, setExpenseName] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [detailFormData, setDetailFormData] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (expenseName.trim()){
      setStep(2);
      console.log('step changed to ' + step);
    }
  };

  if(step === 1){
  return (
    <div className="new-expense-container">
      <div className="new-expense-title">
        <span>Crear</span>
        <span>Cuenta Clara</span>
      </div>
      <div className="new-expense-form">
        <form id="expense-name-form" onSubmit={handleCreate} className="new-expense-form">
          <input type="text" placeholder="Nueva Cuenta Clara" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} required />
        </form>
      </div>
      <div className="new-expense-buttons">
        <button type="submit" form="expense-name-form" className="create-button">Crear</button>
        <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
      </div>
    </div>
    );
  }

  return(
    <div className="new-expense-container">
      <div className="new-expense-title">
        <span>{expenseName}</span>
      </div>
      <div className="new-expense-form">
        <form id="add-expense-form" onSubmit={handleCreate} className="new-expense-form">
          <input type="text" placeholder="Nombre" value={paidBy} onChange={(e) => setPaidBy(e.target.value)} required />
          <input type="text" placeholder="Cantidad" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} required />
        </form>
      </div>
      <div className="new-expense-buttons">
        <button type="submit" form="add-expense-form" className="add-button">Agregar</button>
      </div>
    </div>
  );
};

export default NewExpense;
