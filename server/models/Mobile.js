const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    specs: {
        screen: String,
        battery: String,
        camera: String,
    },
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;
