import './App.css';
import Login from './pages/login';
import Register from './pages/register'; // Import the Register component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register route */}
      </Routes>
    </Router>
  );
}

export default App;
