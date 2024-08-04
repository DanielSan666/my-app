// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-alpha-five-60.vercel.app/api/register', formData, {
        withCredentials: true // Esto permite el uso de cookies
      });
      Swal.fire({
        icon: 'success',
        title: 'Registrado',
        text: 'El usuario se ha registrado correctamente'
      });
      console.log(response.data);
    } catch (error) {
      let errorMessage = 'Error al registrarse';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage
      });
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
