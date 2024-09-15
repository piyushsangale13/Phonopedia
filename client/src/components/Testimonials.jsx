import React from 'react';

function Testimonials() {
    const testimonials = [
        { name: 'John Doe', text: 'Great service and amazing products!', image: 'https://via.placeholder.com/100' },
        { name: 'Jane Smith', text: 'I love my new smartphone!', image: 'https://via.placeholder.com/100' },
    ];

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-lg flex items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 object-cover rounded-full mr-4" />
                        <div>
                            <p className="text-xl font-semibold">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
