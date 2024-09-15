const connectDB = require('./config/db');
const Mobile = require('./models/Mobile');
const mongoose = require('mongoose'); // Ensure mongoose is required

connectDB();

const mobileData = [
    {
        name: 'iPhone 13',
        brand: 'Apple',
        price: '$799',
        image: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
        specs: {
            screen: '6.1"',
            battery: '3240mAh',
            camera: '12MP',
        },
    },
    {
        name: 'Samsung Galaxy S21 FE',
        brand: 'Samsung',
        price: '$799',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70',
        specs: {
            screen: '6.2"',
            battery: '4000mAh',
            camera: '12MP',
        },
    },
    {
        name: 'Google Pixel 7',
        brand: 'Google',
        price: '$599',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/u/3/-original-imaggsuddwubypxp.jpeg?q=70',
        specs: {
            screen: '6.4"',
            battery: '4614mAh',
            camera: '50MP',
        },
    },
    {
        name: 'OnePlus 9',
        brand: 'OnePlus',
        price: '$729',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/q/l/-original-imagdh239er3qnz2.jpeg?q=70',
        specs: {
            screen: '6.55"',
            battery: '4500mAh',
            camera: '48MP',
        },
    },
    {
        name: 'Xiaomi Mi 11X',
        brand: 'Xiaomi',
        price: '$749',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/8/o/-original-imaggcz7bfchgq8g.jpeg?q=70',
        specs: {
            screen: '6.81"',
            battery: '4600mAh',
            camera: '108MP',
        },
    },
    {
        name: 'OPPO Find N3 Flip',
        brand: 'Oppo',
        price: '$1099',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/s/t/-original-imagu8h9bqnjsdnz.jpeg?q=70',
        specs: {
            screen: '6.7"',
            battery: '4500mAh',
            camera: '50MP',
        },
    },
    {
        name: 'Huawei P50 Pro',
        brand: 'Huawei',
        price: '$999',
        image: 'https://m.media-amazon.com/images/I/41jXYwZ-0WL._SX300_SY300_QL70_FMwebp_.jpg',
        specs: {
            screen: '6.6"',
            battery: '4360mAh',
            camera: '50MP',
        },
    },
    {
        name: 'Asus ROG Phone 5',
        brand: 'Asus',
        price: '$999',
        image: 'https://rukminim2.flixcart.com/image/312/312/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70',
        specs: {
            screen: '6.78"',
            battery: '6000mAh',
            camera: '64MP',
        },
    },
    {
        name: 'Nokia 8.3 5G',
        brand: 'Nokia',
        price: '$699',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/3/n/g42-5g-ta-1586-nokia-original-imagw4nenretexub.jpeg?q=70',
        specs: {
            screen: '6.81"',
            battery: '4500mAh',
            camera: '64MP',
        },
    },
    {
        name: 'Motorola Edge 50',
        brand: 'Motorola',
        price: '$999',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70',
        specs: {
            screen: '6.7"',
            battery: '5000mAh',
            camera: '108MP',
        },
    },
    {
        name: 'Realme GT',
        brand: 'Realme',
        price: '$499',
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/1/7/gt-6-rmx3851-realme-original-imah2y7ewhzjpfhd.jpeg?q=70',
        specs: {
            screen: '6.43"',
            battery: '4500mAh',
            camera: '64MP',
        },
    }
];

const seedDB = async () => {
    await Mobile.deleteMany({});
    await Mobile.insertMany(mobileData);
    console.log('Database seeded with mobile data');
    mongoose.connection.close();
};

seedDB();
