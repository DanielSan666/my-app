import './App.css';
import Login from './pages/login';
import Register from './pages/register'; // Import the Register component
import Home from './pages/home';
import Profile from './pages/profile';
import AddCourse from './pages/addcourse';
import Infcurso from './pages/infcurso';
import Payment from './pages/Payment';
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
        <Route path='/Addcourse' element={<AddCourse/>} />
        <Route path="/course/:courseId" element={<Infcurso/>} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
