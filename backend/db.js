const { Pool } = require('pg');
// require('dotenv').config(); // Temporarily disable dotenv



// --- TEMPORARY DATABASE CONFIGURATION ---
// IMPORTANT: Replace these placeholder values with your actual PostgreSQL credentials.
const dbConfig = {
  user: 'postgres',       // e.g., 'postgres'
  host: 'localhost',                // e.g., 'localhost'
  database: 'taxi',   // e.g., 'taxibooking'
  password: 'shariq12', // e.g., 'mysecretpassword'
  port: 5432,                       // e.g., 5432
};

// Check if essential environment variables are loaded.
/* We are temporarily disabling this check
if (!process.env.PGUSER || !process.env.PGPASSWORD || !process.env.PGDATABASE) {
    console.error('FATAL ERROR: Database environment variables are not set.');
    console.error('Please ensure you have a .env file in the /backend directory with PGUSER, PGPASSWORD, and PGDATABASE.');
    process.exit(1); // Stop the server from running without credentials
}
*/

const pool = new Pool(dbConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
}; 