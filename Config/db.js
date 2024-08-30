// config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'db_curug' // Ganti dengan nama database Anda
});

// Promisify pool.query for async/await
const promisePool = pool.promise();

module.exports = promisePool;
