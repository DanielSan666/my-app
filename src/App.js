import './App.css';
import Login from './pages/login';
import Register from './pages/register'; // Import the Register component
import Home from './pages/home';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
