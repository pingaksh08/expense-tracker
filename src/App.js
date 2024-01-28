import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthComponent from './pages/auth/authComponent';
import ExpenseTracker from './pages/expenseTracker/expenseTracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<AuthComponent />} />
          <Route path='/expense-tracker' exact element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
