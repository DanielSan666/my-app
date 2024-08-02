import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleRegisterClick}>Go to Register</button>
    </div>
  );
}

export default Login;
