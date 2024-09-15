const Community = require('../models/Community');

// Get all communities
const getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching communities', error });
    }
};

// Get a specific community by device
const getCommunityByDevice = async (req, res) => {
    const { device } = req.params;
    try {
        const community = await Community.findOne({ device });
        if (community) {
            res.status(200).json(community);
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching community', error });
    }
};

// Create a new post in a specific community
const createPost = async (req, res) => {
    const { device } = req.params;
    const { author, content } = req.body;
    try {
        const community = await Community.findOne({ device });
        if (community) {
            const newPost = {
                author,
                content,
            };
            community.posts.push(newPost); // Mongoose automatically handles timestamps
            await community.save();
            res.status(201).json(community);
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Update a post in a specific community
const updatePost = async (req, res) => {
    const { device, postId } = req.params;
    const { author, content } = req.body;

    try {
        const community = await Community.findOne({ device });
        if (community) {
            const post = community.posts.id(postId);
            if (post) {
                post.author = author || post.author;
                post.content = content || post.content;
                post.updatedAt = Date.now(); // Updating the `updatedAt` timestamp manually
                await community.save();
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete a post in a specific community
const deletePost = async (req, res) => {
    const { device, postId } = req.params;
    try {
        const community = await Community.findOne({ device });
        if (community) {
            const post = community.posts.id(postId);
            if (post) {
                post.remove(); // Mongoose built-in method to remove the post
                await community.save();
                res.status(200).json({ message: 'Post deleted successfully' });
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};

module.exports = {
    getAllCommunities,
    getCommunityByDevice,
    createPost,
    updatePost,
    deletePost,
};