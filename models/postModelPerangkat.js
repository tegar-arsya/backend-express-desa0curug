const db = require('../Config/db');

const createPost = async (title, description, imageUrl) => {
  const [result] = await db.query('INSERT INTO perangkat_desa (title, description, imageUrl) VALUES (?, ?, ?)', [title, description, imageUrl]);
  return result.insertId;
};

const getPosts = async () => {
  const [rows] = await db.query('SELECT * FROM perangkat_desa');
  return rows;
};

const updatePost = async (id, title, description, imageUrl) => {
  const [result] = await db.query('UPDATE perangkat_desa SET title = ?, description = ?, imageUrl = ? WHERE id = ?', [title, description, imageUrl, id]);
  return result.affectedRows;
};

const deletePost = async (id) => {
  const [result] = await db.query('DELETE FROM perangkat_desa WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
