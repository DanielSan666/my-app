// src/components/AddCourse.js
import React, { useState } from 'react';
import axios from 'axios';

function AddCourse({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
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
      const response = await axios.post('http://localhost:5000/api/courses', formData, {
        withCredentials: true // Esto permite el uso de cookies si es necesario
      });
      onCourseAdded(response.data);
      setFormData({ title: '', description: '', duration: '' }); // Reset form
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
    
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
