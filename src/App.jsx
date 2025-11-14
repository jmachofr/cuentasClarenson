import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NewExpense from './pages/NewExpense';
import CreateExpense from './pages/CreateExpense';
import ExpenseHistory from './pages/ExpenseHistory';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect default "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Your other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/new-expense" element={<NewExpense />} />
        <Route path="/expense-history" element={<ExpenseHistory/>} />
        <Route path="/create-expense" element={<CreateExpense/>} />

        {/* Optional: catch-all 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;