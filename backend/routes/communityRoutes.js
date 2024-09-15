const express = require('express');
const router = express.Router();
const { getAllCommunities, getCommunityByDevice, createPost, updatePost, deletePost } = require('../controllers/communityController');

// Route to get all communities
router.get('/', getAllCommunities);

// Route to get a specific community by device name
router.get('/:device', getCommunityByDevice);

// Route to create a new post in a specific community
router.post('/:device/posts', createPost);

// Route to update a specific post in a community
router.put('/:device/posts/:postId', updatePost);

// Route to delete a specific post in a community
router.delete('/:device/posts/:postId', deletePost);

module.exports = router;
