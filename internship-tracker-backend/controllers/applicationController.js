// controllers/applicationController.js
const pool = require('../models/db');

// Add a job application
const addApplication = async (req, res) => {
  const { userId, company_name, job_title, job_link, referral, notes, location, application_method, status, salary, resume_path, cover_letter_path } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO applications (user_id, company_name, job_title, job_link, referral, notes, location, application_method, status, salary, resume_path, cover_letter_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      [userId, company_name, job_title, job_link, referral, notes, location, application_method, status, salary, resume_path, cover_letter_path]
    );
    console.log('Connecting to database:', process.env.DB_DATABASE);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all applications for a user
const getApplications = async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query('SELECT * FROM applications WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addApplication, getApplications };
