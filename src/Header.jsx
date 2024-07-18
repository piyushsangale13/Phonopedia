import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="relative flex h-30 items-center justify-between p-6 lg:px-8" aria-label="Global">
            <Link to="/" className="flex align-middle lg:flex-1">
                <PhoneIphoneIcon className='text-blue-500' />
                <span className="font-semibold mx-2">Phonopedia</span>
            </Link>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="font-semibold leading-6 text-gray-900">Home</Link>
                <Link to="/mobile" className="font-semibold leading-6 text-gray-900">Mobiles</Link>
                <Link to="/community" className="font-semibold leading-6 text-gray-900">Community</Link>
                <Link to="/offers" className="font-semibold leading-6 text-gray-900">Offers</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="/login" className="font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg lg:hidden">
                    <div className="flex items-center flex-col p-4">
                        <Link to="/" className="block font-semibold leading-6 text-gray-900 py-2">Home</Link>
                        <Link to="/mobile" className="block font-semibold leading-6 text-gray-900 py-2">Mobiles</Link>
                        <Link to="/community" className="block font-semibold leading-6 text-gray-900 py-2">Community</Link>
                        <Link to="offers" className="block font-semibold leading-6 text-gray-900 py-2">Offers</Link>
                        <Link to="/login" className="block font-semibold leading-6 text-gray-900 py-2">Log in <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
