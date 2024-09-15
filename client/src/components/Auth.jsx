import axios from 'axios';
import config from "../config/config.json";

const API_URL = `${config.API.BASE_URL}/api/auth`;

// Login user
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const { token } = response.data;

        // Save token to localStorage
        localStorage.setItem('token', token);

        return true; // Indicate successful login
    } catch (error) {
        console.error('Login error', error);
        return false; // Indicate failed login
    }
};

// Signup user
export const signup = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { firstName, lastName, email, password });

        if (response.status === 400) return false;

        const { token } = response.data;
        localStorage.setItem('token', token);
        
        return true;
    } catch (error) {
        console.error('Signup error', error);
        return false;
    }
};

// Logout user
export const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
};

// Check if user is authenticated
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null; // Return true if token exists
};

// Get Auth Token
export const getToken = () => {
    return localStorage.getItem('token');
};

// Add token to request headers
export const authHeader = () => {
    const token = getToken();
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
};
