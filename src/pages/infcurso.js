import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './InfCourse.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const InfCurso = () => {
  const { courseId } = useParams();
  const navigate = useNavigate(); // Inicializa useNavigate
  const [loading, setLoading] = useState(false);

  const course = "Sample Course"; // Reemplaza esto con los datos reales del curso
  const amount = 40; // Reemplaza esto con la cantidad real

  const handleCheckoutStripe = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/payment-stripe', { course, amount });
      const session = response.data;

      if (session && session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('No se pudo iniciar el pago');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      alert('No se pudo iniciar el pago. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className="inf-curso-container">
      <h2>Información del Curso</h2>
      <p>Nombre del Curso: {course}</p>
      <p className="amount">Costo del Curso: ${amount}</p>
      <button className="button" onClick={handleCheckoutStripe} disabled={loading}>
        {loading ? 'Processing...' : 'Pay with Stripe'}
      </button>
      <button className="button go-back-button" onClick={handleGoBack}>
        Regresar
      </button>
    </div>
  );
};

export default InfCurso;
