import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from './Auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            window.location.href = '/'; // Redirect to dashboard after login
        } else {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-3 py-2 border rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                    <p className="mt-2">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </p>
                    {error && <p className='text-red-500'>{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
