const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Enable CORS for all origins and allow relevant headers
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse incoming JSON requests
app.use(express.json());

// Mount user-related routes under /api/users
app.use('/api/users', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.status(200).send('🚀 Backend server is running fine!');
});

// Disallow all other methods on home route
app.all('/', (req, res) => {
  res.status(403).json({ message: '🚫 Forbidden: You are not allowed to access this route using this method' });
});

// Start the server after DB connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected via Sequelize');

    await sequelize.sync({ force: false });
    console.log('✅ All models are synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Sequelize DB connection error:', error);
  }
})();
