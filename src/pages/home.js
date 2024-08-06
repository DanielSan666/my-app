// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Menu from './components/menu'; // Adjust the path if needed
import '../menu.css';
import '../home.css';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses', {
          withCredentials: true
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          withCredentials: true
        });
        console.log('User profile:', response.data); // Verifica la estructura de los datos
        setUserRole(response.data.role); // Set user role from profile data
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourses();
    fetchUserProfile();
  }, []);

  const handleAddCourse = () => {
    navigate('/addcourse');
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Menu />
      <div className="main-content">
        <h2>Courses</h2>
        {courses.length > 0 ? (
          <div className="courses-grid">
            {courses.map(course => (
              <div
                className="course-card"
                key={course._id}
                onClick={() => handleCourseClick(course._id)}
              >
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No courses available.</p>
        )}
        {userRole === 'admin' && ( // Conditionally render the button based on user role
          <button onClick={handleAddCourse}>Add Course</button>
        )}
      </div>
    </div>
  );
};

export default Home;
