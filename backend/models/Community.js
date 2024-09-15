const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: Number,
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const communitySchema = new mongoose.Schema({
    device: {
        type: String,
        required: true
    },
    posts: [postSchema]
});

module.exports = mongoose.model('Community', communitySchema);
