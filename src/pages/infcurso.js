import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './InfCourse.css';

const InfCurso = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError('Error fetching course');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/payment-stripe', {
        course: course.title,
        amount: 40,
        courseId
      });
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error initiating Stripe payment:', error);
      setError('Failed to initiate payment');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="inf-curso-container">
      <h2>Información del Curso</h2>
      <p>Nombre del Curso: {course.title}</p>
      <p className="amount">Costo del Curso: ${course.amount}</p>
      
      <button className="button payment-button" onClick={handlePayment}>
        Pagar con Stripe
      </button>
      <button className="button go-back-button" onClick={handleGoBack}>
        Regresar
      </button>
    </div>
  );
};

export default InfCurso;
