import React from 'react';

function HeroSection() {
    const deals = [
        { name: 'Samsung Galaxy S23 5G', price: '$599', image: 'https://m.media-amazon.com/images/I/51L8W6d-DNL._SX679_.jpg' },
        { name: 'Apple iPhone 14', price: '$799', image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg' },
        { name: 'Motorola Edge 50 Fusion 5G', price: '$399', image: 'https://m.media-amazon.com/images/I/41rd-iwdYBL._SX300_SY300_QL70_FMwebp_.jpg' },
    ];

    return (
        <div className="hero-section bg-blue-500 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Today's Recommended Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deals.map((deal, index) => (
                    <div key={index} className="p-4 bg-white text-black rounded-lg shadow-lg">
                        <img src={deal.image} alt={deal.name} className="w-full h-72  object-contain  rounded-lg" />
                        <h2 className="text-2xl font-semibold mt-4">{deal.name}</h2>
                        <p className="text-xl font-bold mt-2">{deal.price}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default HeroSection;
