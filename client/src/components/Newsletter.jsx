import React from 'react';

function Newsletter() {
    return (
        <div className="bg-blue-500 text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <form className="flex flex-col md:flex-row">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 rounded-md text-black mb-4 md:mb-0 md:mr-4"
                />
                <button type="submit" className="p-2 bg-black text-white rounded-md">Subscribe</button>
            </form>
        </div>
    );
}

export default Newsletter;
