import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../login.css';  // Asegúrate de crear y enlazar este archivo CSS

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password }, { withCredentials: true });
            if (response.data.token) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
                navigate('/home');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your email and password.',
            });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                    <div className="buttonContainer">
                        <button type="submit" className="button">Login</button>
                        <div className="buttonSpacer">
                            <button type="button" className="button" onClick={() => navigate('/register')}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
