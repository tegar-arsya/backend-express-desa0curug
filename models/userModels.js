const db = require('../Config/db');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const JWT_SECRET = 'kintilidinfuckyou12345678910';

const registerUser = async (name, email, password) => {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
      return result.insertId;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };
  const findUserByEmail = async (email) => {
    try {
      const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0];
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  };
  const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  };
  
  module.exports = {
    registerUser,
    findUserByEmail,
    generateToken,
  };