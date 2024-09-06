
const bcrypt = require('bcryptjs');
const { registerUser, findUserByEmail, generateToken } = require('../models/userModels');
const register = async (req, res) => {
  const { name, email, password } = req.body; 
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    const userId = await registerUser(name, email, password);
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration error', error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login error', error: error.message });
  }
};

module.exports = {
  register,
  login,
};
