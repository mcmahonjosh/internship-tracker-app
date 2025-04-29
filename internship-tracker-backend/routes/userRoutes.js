// routes/userRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// POST route for registering a user
router.post('/register', registerUser);

module.exports = router;
