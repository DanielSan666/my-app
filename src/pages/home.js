// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Menu from './components/menu';
import '../menu.css';
import '../home.css';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://backend-alpha-five-60.vercel.app/api/courses', {
          withCredentials: true // Esto permite el uso de cookies si es necesario
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAddCourse = () => {
    navigate('/addcourse');
  };

  return (
    <div>
        <Menu />
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
      <h2>Courses</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map(course => (
            <li key={course._id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Duration: {course.duration} hours</p>
              {course.image && <img src={course.image} alt={course.title} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available.</p>
      )}

      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
};

export default Home;
