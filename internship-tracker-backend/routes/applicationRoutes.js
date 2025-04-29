const express = require('express');
const router = express.Router();
const pool = require('../models/db'); // Correct if db.js is inside /models

// POST /api/applications/ - Create a new application
router.post('/', async (req, res) => {
    try {
        const {
            user_id,
            company_name,
            role,
            location,
            application_method,
            status,
            referral,
            salary,
            notes,
            resume_url,
            cover_letter_url
        } = req.body;

        const newApplication = await pool.query(
            `INSERT INTO applications 
            (user_id, company_name, role, location, application_method, status, referral, salary, notes, resume_url, cover_letter_url) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
            [user_id, company_name, role, location, application_method, status, referral, salary, notes, resume_url, cover_letter_url]
        );

        res.status(201).json(newApplication.rows[0]);
    } catch (error) {
        console.error(error); // Full error
        res.status(500).send('Server error');
    }
});

// GET /api/applications/ - Fetch all applications
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM applications');
        console.log('Connecting to database:', process.env.DB_DATABASE);
        res.json(result.rows);
    } catch (err) {
        console.error(err); // Full error
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router; // Only one export!
