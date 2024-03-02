import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseTracker from './pages/expenseTracker/expenseTracker';
import Signup from './pages/signUp/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Signup />} />
          <Route path='/expense-tracker' exact element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
