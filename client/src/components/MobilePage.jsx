import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {authHeader} from './Auth';
import config from "../config/config.json";

function MobilePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [compareIds, setCompareIds] = useState([]);
    const [mobileDevices, setMobileDevices] = useState([]);

    useEffect(() => {
        const fetchMobileDevices = async () => {
            try {
                const config = {
                    method: 'get',
                    url: `${config.API.BASE_URL}/api/mobiles`,
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
