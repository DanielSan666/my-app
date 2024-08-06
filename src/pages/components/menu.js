import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../menu.css';

function NavigationMenu() {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
            Swal.fire({
                icon: 'success',
                title: 'Logged Out',
                text: 'You have successfully logged out.',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = '/login';
            });
        } catch (error) {
            console.error('Logout failed:', error);
            Swal.fire({
                icon: 'error',
                title: 'Logout Failed',
                text: 'There was an issue logging out. Please try again.',
            });
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
            
            <button className="menu-item logout-button" onClick={handleLogout}>
                Logout
            </button>
        </Menu>
    );
}

export default NavigationMenu;
