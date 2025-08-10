const { Pool } = require('pg');

// Use DATABASE_URL or INTERNAL_DATABASE_URL from environment variables
const connectionString =
  process.env.DATABASE_URL ||
  process.env.INTERNAL_DATABASE_URL ||
  null;

if (!connectionString) {
  console.error('FATAL ERROR: No DATABASE_URL or INTERNAL_DATABASE_URL found.');
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false } // External DB (e.g., local dev) needs SSL
    : false // Internal Render DB does not
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
