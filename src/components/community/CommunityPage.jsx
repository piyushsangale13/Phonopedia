import React, { useState } from 'react';

const initialData = [
    {
        id: 1,
        device: 'iPhone 13',
        posts: [
            { id: 1, author: 'John Doe', content: 'Loving the new iPhone 13 camera!' },
            { id: 2, author: 'Jane Smith', content: 'Battery life has been amazing.' },
            { id: 3, author: 'Chris Green', content: 'Is anyone else having Wi-Fi issues?' },
            { id: 4, author: 'Sarah Brown', content: 'I found a great case for my iPhone 13 on Amazon.' },
        ],
    },
    {
        id: 2,
        device: 'Samsung Galaxy S21',
        posts: [
            { id: 1, author: 'Alice Johnson', content: 'The display on the S21 is stunning!' },
            { id: 2, author: 'Bob Brown', content: 'Performance has been great so far.' },
            { id: 3, author: 'David Wilson', content: 'Any tips for better battery life?' },
            { id: 4, author: 'Emily White', content: 'Loving the new One UI features.' },
        ],
    },
    {
        id: 3,
        device: 'Google Pixel 6',
        posts: [
            { id: 1, author: 'Michael Scott', content: 'The camera is just unbeatable!' },
            { id: 2, author: 'Dwight Schrute', content: 'Stock Android is the best experience.' },
            { id: 3, author: 'Jim Halpert', content: 'Battery life could be better.' },
            { id: 4, author: 'Pam Beesly', content: 'Love the smooth performance.' },
        ],
    },
    {
        id: 4,
        device: 'OnePlus 9',
        posts: [
            { id: 1, author: 'Tony Stark', content: 'Warp charge is a game-changer!' },
            { id: 2, author: 'Steve Rogers', content: 'The display is fantastic.' },
            { id: 3, author: 'Natasha Romanoff', content: 'OxygenOS is super smooth.' },
            { id: 4, author: 'Bruce Banner', content: 'Battery life is solid.' },
        ],
    },
    {
        id: 5,
        device: 'Xiaomi Mi 11',
        posts: [
            { id: 1, author: 'Peter Parker', content: 'Amazing value for the price.' },
            { id: 2, author: 'Clark Kent', content: 'MIUI has improved a lot.' },
            { id: 3, author: 'Diana Prince', content: 'Battery lasts all day.' },
            { id: 4, author: 'Barry Allen', content: 'The camera is really good.' },
        ],
    },
];

function CommunityPage() {
    const [data, setData] = useState(initialData);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [newPost, setNewPost] = useState({ author: '', content: '' });

    const handleDeviceClick = (device) => {
        setSelectedDevice(device);
        setNewPost({ author: '', content: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.author && newPost.content) {
            const updatedData = data.map((community) => {
                if (community.device === selectedDevice) {
                    const newId = community.posts.length + 1;
                    return {
                        ...community,
                        posts: [...community.posts, { id: newId, author: newPost.author, content: newPost.content }],
                    };
                }
                return community;
            });
            setData(updatedData);
            setNewPost({ author: '', content: '' });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Community</h1>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-4">
                    <h2 className="text-2xl font-semibold mb-4">Join a Community</h2>
                    <ul className="space-y-4">
                        {data.map((community) => (
                            <li
                                key={community.id}
                                className="p-4 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
                                onClick={() => handleDeviceClick(community.device)}
                            >
                                {community.device}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/4 p-4">
                    {selectedDevice ? (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{selectedDevice} Community</h2>
                            <ul className="space-y-4 mb-8">
                                {data
                                    .find((community) => community.device === selectedDevice)
                                    .posts.map((post) => (
                                        <li key={post.id} className="p-4 bg-white rounded-lg shadow">
                                            <h3 className="text-xl font-bold">{post.author}</h3>
                                            <p className="mt-2">{post.content}</p>
                                        </li>
                                    ))}
                            </ul>
                            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-4">Create a Post</h3>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="author"
                                        placeholder="Your name"
                                        value={newPost.author}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-md border border-gray-300"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        name="content"
                                        placeholder="Your post"
                                        value={newPost.content}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-md border border-gray-300"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Post</button>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">
                            <p>Please select a community to view posts.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CommunityPage;
