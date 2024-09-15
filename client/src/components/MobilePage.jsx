import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {authHeader} from './Auth'
// const mobileDevices = [
//     {
//         id: 1,
//         name: 'iPhone 13',
//         brand: 'Apple',
//         price: '$799',
//         image: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
//         specs: {
//             screen: '6.1"',
//             battery: '3240mAh',
//             camera: '12MP',
//         },
//     },
//     {
//         id: 2,
//         name: 'Samsung Galaxy S21 FE',
//         brand: 'Samsung',
//         price: '$799',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70',
//         specs: {
//             screen: '6.2"',
//             battery: '4000mAh',
//             camera: '12MP',
//         },
//     },
//     {
//         id: 3,
//         name: 'Google Pixel 7',
//         brand: 'Google',
//         price: '$599',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=70',
//         specs: {
//             screen: '6.4"',
//             battery: '4614mAh',
//             camera: '50MP',
//         },
//     },
//     {
//         id: 4,
//         name: 'OnePlus 9',
//         brand: 'OnePlus',
//         price: '$729',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/q/l/-original-imagdh239er3qnz2.jpeg?q=70',
//         specs: {
//             screen: '6.55"',
//             battery: '4500mAh',
//             camera: '48MP',
//         },
//     },
//     {
//         id: 5,
//         name: 'Xiaomi Mi 11X',
//         brand: 'Xiaomi',
//         price: '$749',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/8/o/-original-imaggcz7bfchgq8g.jpeg?q=70',
//         specs: {
//             screen: '6.81"',
//             battery: '4600mAh',
//             camera: '108MP',
//         },
//     },
//     {
//         id: 6,
//         name: 'OPPO Find N3 Flip',
//         brand: 'Oppo',
//         price: '$1099',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/s/t/-original-imagu8h9bqnjsdnz.jpeg?q=70',
//         specs: {
//             screen: '6.7"',
//             battery: '4500mAh',
//             camera: '50MP',
//         },
//     },
//     {
//         id: 7,
//         name: 'Huawei P50 Pro',
//         brand: 'Huawei',
//         price: '$999',
//         image: 'https://m.media-amazon.com/images/I/41jXYwZ-0WL._SX300_SY300_QL70_FMwebp_.jpg',
//         specs: {
//             screen: '6.6"',
//             battery: '4360mAh',
//             camera: '50MP',
//         },
//     },
//     {
//         id: 8,
//         name: 'Asus ROG Phone 5',
//         brand: 'Asus',
//         price: '$999',
//         image: 'https://rukminim2.flixcart.com/image/312/312/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70',
//         specs: {
//             screen: '6.78"',
//             battery: '6000mAh',
//             camera: '64MP',
//         },
//     },
//     {
//         id: 9,
//         name: 'Nokia 8.3 5G',
//         brand: 'Nokia',
//         price: '$699',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/3/n/g42-5g-ta-1586-nokia-original-imagw4nenretexub.jpeg?q=70',
//         specs: {
//             screen: '6.81"',
//             battery: '4500mAh',
//             camera: '64MP',
//         },
//     },
//     {
//         id: 10,
//         name: 'Motorola Edge 50',
//         brand: 'Motorola',
//         price: '$999',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70',
//         specs: {
//             screen: '6.7"',
//             battery: '5000mAh',
//             camera: '108MP',
//         },
//     },
//     {
//         id: 11,
//         name: 'Realme GT',
//         brand: 'Realme',
//         price: '$499',
//         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/1/7/gt-6-rmx3851-realme-original-imah2y7ewhzjpfhd.jpeg?q=70',
//         specs: {
//             screen: '6.43"',
//             battery: '4500mAh',
//             camera: '64MP',
//         },
//     }
// ];

function MobilePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [compareIds, setCompareIds] = useState([]);
    const [mobileDevices, setMobileDevices] = useState([]);

    useEffect(() => {
        const fetchMobileDevices = async () => {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:5000/api/mobiles',
                    headers: authHeader(),
                };
                const response = await axios.request(config);
                setMobileDevices(response.data); // Assuming response.data contains the mobile devices array
            } catch (error) {
                console.error('Error fetching mobile devices:', error);
            }
        };

        fetchMobileDevices();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleCompare = (id) => {
        setCompareIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((compareId) => compareId !== id);
            } else if (prev.length < 2) {
                return [...prev, id];
            } else {
                return prev;
            }
        });
    };

    const filteredDevices = mobileDevices.filter((device) =>
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const compareDevices = compareIds.map((id) => mobileDevices.find((device) => device._id === id));

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Search and Compare Mobile Devices</h1>
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search for mobile devices..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-3 rounded-md border border-gray-300 shadow-sm"
                    />
                </div>
                {compareDevices.length > 0 && (
                    <div className="my-12 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-center">Comparison</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {compareDevices.map((device) => (
                                <div key={device._id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                                    <h3 className="text-xl font-bold mb-4">{device.name}</h3>
                                    <img src={device.image} alt={device.name} className="h-32 w-32 object-contain mb-4 rounded" />
                                    <p className="text-gray-700 mb-2"><strong>Brand:</strong> {device.brand}</p>
                                    <p className="text-gray-700 mb-2"><strong>Price:</strong> {device.price}</p>
                                    <p className="text-gray-700 mb-2"><strong>Screen:</strong> {device.specs.screen}</p>
                                    <p className="text-gray-700 mb-2"><strong>Battery:</strong> {device.specs.battery}</p>
                                    <p className="text-gray-700 mb-2"><strong>Camera:</strong> {device.specs.camera}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDevices.map((device) => (
                        <div key={device._id} className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
                            <img src={device.image} alt={device.name} className="h-48 w-full object-contain mb-4 rounded" />
                            <h2 className="text-xl font-bold mb-2">{device.name}</h2>
                            <p className="text-gray-700 mb-2">{device.brand}</p>
                            <p className="text-gray-900 font-semibold mb-4">{device.price}</p>
                            <button
                                onClick={() => toggleCompare(device._id)}
                                className={`absolute top-2 right-2 px-4 py-2 rounded ${compareIds.includes(device._id) ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
                            >
                                {compareIds.includes(device._id) ? 'Remove' : 'Compare'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobilePage;
