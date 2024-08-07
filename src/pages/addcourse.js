// src/components/AddCourse.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is imported

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
        withCredentials: true
      });
      if (onCourseAdded) {
        onCourseAdded(response.data); // Call the function if it's provided
      }
      setFormData({ title: '', description: '', duration: '' }); // Reset form

      Swal.fire({
        title: 'Course Added!',
        text: 'The course has been successfully registered.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/home'; // Redirect to home page
        }
      });
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
