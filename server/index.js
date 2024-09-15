const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const authenticateToken = require('./middlewares/authMiddleware');
const authRoutes = require('./routes/auth');
const mobileRoutes = require('./routes/mobileRoutes');
const communityRoutes = require('./routes/communityRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/mobiles', authenticateToken, mobileRoutes);
app.use('/api/communities', authenticateToken, communityRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
});
app.get('/', (req, res) => {
    res.send('Welcome to phonopedia-server');
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});