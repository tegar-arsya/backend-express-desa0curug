const { getAllUsers } = require('../models/userModels');
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query error', error: error.message });
  }
};

module.exports = {
  getUsers,
};
