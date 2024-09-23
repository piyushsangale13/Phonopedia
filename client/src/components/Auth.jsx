import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/auth`;

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
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds

        // Check if token has expired
        if (decodedToken.exp < currentTime) {
            // Token has expired, remove it from localStorage
            localStorage.removeItem('token');
            return false;
        }

        return true; // Token is valid
    } catch (error) {
        // If there's an error in decoding the token, it's invalid
        console.error('Invalid token', error);
        return false;
    }
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

// Get info from saved token
export const getTokenInfo = () => {
    const token = getToken();
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        
        // Assuming the token contains the user information like firstName, lastName, etc.
        const { firstName, lastName, email } = decodedToken;
        
        return { firstName, lastName, email };
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};