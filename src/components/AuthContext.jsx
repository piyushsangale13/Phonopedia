import React, { useContext, createContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app with authentication context
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate authentication with useEffect (replace with actual authentication logic)
    useEffect(() => {
        // Simulate fetching user from backend or localStorage
        const fetchCurrentUser = async () => {
            // Example: Fetch user from backend or localStorage
            // Replace with actual authentication logic
            const user = localStorage.getItem('currentUser');
            if (user) {
                setCurrentUser(JSON.parse(user));
            }
            setLoading(false);
        };

        fetchCurrentUser();
    }, []);

    // Example login function (replace with actual login logic)
    const login = async (email, password) => {
        // Example: Authenticate user and set currentUser
        // Replace with actual authentication logic
        const user = { email, name: 'John Doe' }; // Example user object
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user)); // Store user in localStorage
    };

    // Example logout function (replace with actual logout logic)
    const logout = async () => {
        // Example: Clear currentUser and localStorage
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    // Value provided by AuthContext
    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
}