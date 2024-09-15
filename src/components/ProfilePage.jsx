import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { authHeader } from './Auth'; // Assuming you have a getToken function that retrieves the JWT
import config from "../config/config.json";
import Avatar from '@mui/material/Avatar';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: "Enthusiastic tech lover. Always excited about the latest gadgets.",
        posts: [
            { id: 1, title: "My first post", content: "Just started using this amazing platform!" },
            { id: 2, title: "Tech Review", content: "Here's my review of the latest smartphone model." },
            { id: 3, title: "Upcoming Features", content: "Excited about the upcoming features of the next iPhone!" }
        ]
    });

    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`${config.API.BASE_URL}/api/auth/profile`, {
                    headers: authHeader(),
                });
                console.log(response);
                setUser((prevState) => ({
                    ...prevState,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                }));
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError('Error fetching profile');
            }
        };

        fetchUserProfile();
    }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col items-center lg:flex-row bg-white shadow-lg rounded-lg">
                <div className="lg:w-1/4 p-6 border-b lg:border-b-0 lg:border-r">
                    <div className="flex justify-center">
                        <Avatar 
                            src="avatar"
                            alt={user.firstName} 
                            sx={{ width: 100, height: 100 }} 
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>
                <div className="lg:w-3/4 p-6">
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Bio</label>
                                <textarea
                                    name="bio"
                                    value={user.bio}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows="4"
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
                            <button
                                type="button"
                                onClick={handleEditClick}
                                className="ml-4 text-blue-500 underline"
                            >
                                Cancel
                            </button>
                        </form>
                    ) : (
                        <>
                            <h3 className="text-xl font-semibold mb-4">Bio</h3>
                            <p className="mb-6">{user.bio}</p>
                            <h3 className="text-xl font-semibold mb-4">Posts</h3>
                            <ul>
                                {user.posts.map((post) => (
                                    <li key={post.id} className="mb-4">
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                            <h4 className="text-lg font-semibold">{post.title}</h4>
                                            <p className="mt-2">{post.content}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 text-center">
                                <button
                                    onClick={handleEditClick}
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
