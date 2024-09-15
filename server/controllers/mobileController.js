const Mobile = require('../models/Mobile');

const getMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        res.json(mobiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMobile = async (req, res) => {
    const { name, brand, price, image, specs } = req.body;
    const mobile = new Mobile({ name, brand, price, image, specs });

    try {
        const newMobile = await mobile.save();
        res.status(201).json(newMobile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getMobiles,
    createMobile,
};
