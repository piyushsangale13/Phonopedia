import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mx-auto">
            <div className="container flex flex-col md:flex-row sm:items-start items-center justify-around">
                {/* Newsletter Subscription */}
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <form className="flex flex-col md:flex-row ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-md text-black mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
                        />
                        <button type="submit" className="p-2 bg-black text-white rounded-md w-full md:w-auto">Subscribe</button>
                    </form>
                </div>
                
                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Quick Links</h2>
                    <Link to="/" className="text-gray-400 mb-2">Home</Link>
                    <Link to="/mobile" className="text-gray-400 mb-2">Mobiles</Link>
                    <Link to="/community" className="text-gray-400 mb-2">Community</Link>
                </div>
                
                {/* Contact Information and Social Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400 mb-2">Email: piyushsangale13@gmail.com</p>
                    <p className="text-gray-400 mb-2">Phone: +91 9325461338</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
            
            {/* Copyright Notice */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
                © 2024 Phonopedia. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
