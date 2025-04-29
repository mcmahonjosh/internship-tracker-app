// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // for handling cross-origin requests

// Set up basic route
app.get('/', (req, res) => {
  res.send('Job Application Tracker API');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/users', userRoutes);

const applicationRoutes = require('./routes/applicationRoutes');

// Use application routes
app.use('/api/applications', applicationRoutes);