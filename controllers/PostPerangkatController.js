const { createPost, getPosts, updatePost, deletePost } = require('../models/postModelPerangkat');
const path = require('path');
const fs = require('fs');

const create = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file;
  if (!title || !description || !image) {
    return res.status(400).json({ message: 'Title, description, and image are required' });
  }
  try {
    const imageUrl = `/uploads/${image.filename}`;
    const postId = await createPost(title, description, imageUrl);
    res.status(201).json({ message: 'Post created successfully', postId });
  } catch (error) {
    console.error('Post creation error:', error);
    res.status(500).json({ message: 'Post creation error', error: error.message });
  }
};

const fetchPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Fetch posts error:', error);
    res.status(500).json({ message: 'Fetch posts error', error: error.message });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const image = req.file;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  try {
    const post = await getPosts(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    let imageUrl = post.imageUrl;
    if (image) {
      imageUrl = `/uploads/${image.filename}`;
      // Delete old image if a new one is uploaded
      if (post.imageUrl) {
        fs.unlinkSync(path.join(__dirname, '..', post.imageUrl));
      }
    }

    const updatedRows = await updatePost(id, title, description, imageUrl);
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Post not found or no changes made' });
    }

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error('Post update error:', error);
    res.status(500).json({ message: 'Post update error', error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getPosts(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.imageUrl) {
      fs.unlinkSync(path.join(__dirname, '..', post.imageUrl));
    }

    const deletedRows = await deletePost(id);
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Post deletion error:', error);
    res.status(500).json({ message: 'Post deletion error', error: error.message });
  }
};

module.exports = {
  create,
  fetchPosts,
  edit,
  remove,
};
