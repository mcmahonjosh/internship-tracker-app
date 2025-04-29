const { Pool } = require('pg');
require('dotenv').config(); // so we can use .env file

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

console.log('Connecting to database:', process.env.DB_DATABASE);

module.exports = pool;

