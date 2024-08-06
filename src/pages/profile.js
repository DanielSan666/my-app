import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', { withCredentials: true });
        setProfile(response.data);
      } catch (error) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleGoHome = () => {
    navigate('/home'); // Navega a la página de inicio
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <h2>Registered Courses</h2>
          <ul>
            {profile.courses && profile.courses.map(course => (
              <li key={course._id}>{course.name}</li> // Ajusta según la estructura de tus cursos
            ))}
          </ul>
          <button onClick={handleGoHome}>Go Home</button> {/* Agrega el botón */}
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};


export default Profile;
