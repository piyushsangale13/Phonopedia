import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from './components/Auth';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = isAuthenticated();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAvatarClick = () => {
        navigate('/profile'); // Redirect to the profile page
    };

    return (
        <nav className="relative flex h-16 items-center justify-between p-4 lg:px-8 z-50" aria-label="Global">
 
            <div className="flex items-center lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                >
                    <MenuIcon />
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>

            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center lg:flex-1">
                <PhoneIphoneIcon className="text-blue-500" />
                <span className="font-semibold mx-2">Phonopedia</span>
            </Link>

            <div className="flex items-center lg:hidden">
                {isLoggedIn ? (
                    <Avatar
                        alt="User Avatar"
                        src=""
                        sx={{ width: 32, height: 32 }}
                        className="cursor-pointer"
                        onClick={handleAvatarClick}
                    />
                ) : (
                    <Link to="/login" className="ml-4 font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                )}
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="font-semibold leading-6 text-gray-900">Home</Link>
                <Link to="/mobile" className="font-semibold leading-6 text-gray-900">Mobiles</Link>
                <Link to="/community" className="font-semibold leading-6 text-gray-900">Community</Link>
                <Link to="/offers" className="font-semibold leading-6 text-gray-900">Offers</Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                {isLoggedIn ? (
                    <>
                        <Avatar
                            alt="User Avatar"
                            src="" 
                            sx={{ width: 32, height: 32 }} 
                            className="cursor-pointer border"
                            onClick={handleAvatarClick}
                        />
                        <button
                            onClick={logout}
                            className="ml-4 font-semibold leading-6 text-gray-900"
                        >
                            Log out <span aria-hidden="true">&rarr;</span>
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
                )}
            </div>

            {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg lg:hidden">
                    <div className="flex flex-col items-center p-4">
                        <Link to="/" className="block font-semibold leading-6 text-gray-900 py-2">Home</Link>
                        <Link to="/mobile" className="block font-semibold leading-6 text-gray-900 py-2">Mobiles</Link>
                        <Link to="/community" className="block font-semibold leading-6 text-gray-900 py-2">Community</Link>
                        <Link to="/offers" className="block font-semibold leading-6 text-gray-900 py-2">Offers</Link>
                        {isLoggedIn ? (
                            <button
                                onClick={logout}
                                className="block font-semibold leading-6 text-gray-900 py-2"
                            >
                                Log out <span aria-hidden="true">&rarr;</span>
                            </button>
                        ) : (
                            <Link to="/login" className="block font-semibold leading-6 text-gray-900 py-2">Log in <span aria-hidden="true">&rarr;</span></Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
