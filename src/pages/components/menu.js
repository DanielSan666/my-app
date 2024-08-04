import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../menu.css';

function NavigationMenu() {
    const handleLogout = async () => {
        try {
            await axios.post('https://backend-alpha-five-60.vercel.app/api/logout', {}, { withCredentials: true });
            // Redirige al usuario a la página de login después de cerrar sesión
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <Menu>
            <Link className="menu-item" to="/">
                Home
            </Link>
            <Link className="menu-item" to="/profile">
                Profile
            </Link>
            <Link className="menu-item" to="/register">
                Register
            </Link>
            <button className="menu-item logout-button" onClick={handleLogout}>
                Logout
            </button>
        </Menu>
    );
}

export default NavigationMenu;
