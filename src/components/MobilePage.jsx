import React from 'react';

const mobileDevices = [
    { id: 1, name: 'iPhone 13', brand: 'Apple', price: '$799', image: '/images/iphone13.jpg' },
    { id: 2, name: 'Galaxy S21', brand: 'Samsung', price: '$699', image: '/images/galaxy-s21.jpg' },
    { id: 3, name: 'Pixel 6', brand: 'Google', price: '$599', image: '/images/pixel-6.jpg' },
    { id: 4, name: 'OnePlus 9', brand: 'OnePlus', price: '$729', image: '/images/oneplus-9.jpg' },
];

function MobilePage() {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Popular Mobile Devices</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mobileDevices.map((device) => (
                        <div key={device.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img src={device.image} alt={device.name} className="h-48 w-full object-cover mb-4 rounded" />
                            <h2 className="text-xl font-bold">{device.name}</h2>
                            <p className="text-gray-700">{device.brand}</p>
                            <p className="text-gray-900 font-semibold">{device.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobilePage;
