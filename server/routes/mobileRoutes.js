const express = require('express');
const { getMobiles, createMobile } = require('../controllers/mobileController');

const router = express.Router();
const axios = require('axios');
router.get('/data',async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-specifications-by-phone-custom-id/103693',
        headers: {
          'x-rapidapi-key': 'ca4a2c1d6dmsh908ef1e8ec1b4ffp12bc29jsn6a05cd068e03',
          'x-rapidapi-host': 'mobile-phone-specs-database.p.rapidapi.com'
        }
      };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.send("error")
    }
})
router.get('/', getMobiles);
router.post('/', createMobile);

module.exports = router;