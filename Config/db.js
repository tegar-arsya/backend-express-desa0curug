// // // config/db.js
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
// config/db.js
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'apicurug.tegararsyadani.my.id',
//   user: 'tegarars_TegarArsyadani', // Ganti dengan username MySQL Anda
//   password: 'Tegar2000018243', // Ganti dengan password MySQL Anda
//   database: 'tegarars_db_curug' // Ganti dengan nama database Anda
// });

// // Promisify pool.query for async/await
// const promisePool = pool.promise();

// module.exports = promisePool;
