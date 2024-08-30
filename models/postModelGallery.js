const db = require('../Config/db');

const createPost = async (title, description, imageUrl) => {
  const [result] = await db.query('INSERT INTO gallery (title, description, imageUrl) VALUES (?, ?, ?)', [title, description, imageUrl]);
  return result.insertId;
};

const getPosts = async () => {
  const [rows] = await db.query('SELECT * FROM gallery');
  return rows;
};

const updatePost = async (id, title, description, imageUrl) => {
  const query = imageUrl
    ? 'UPDATE gallery SET title = ?, description = ?, imageUrl = ? WHERE id = ?'
    : 'UPDATE gallery SET title = ?, description = ? WHERE id = ?';
  const params = imageUrl ? [title, description, imageUrl, id] : [title, description, id];
  const [result] = await db.query(query, params);
  return result.affectedRows;
};

const deletePost = async (id) => {
  const [result] = await db.query('DELETE FROM gallery WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
