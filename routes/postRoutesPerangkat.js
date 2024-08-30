const express = require('express');
const upload = require('../middleware/uploadPerangkatMiddleware');
const { create, fetchPosts, edit, remove } = require('../controllers/PostPerangkatController');
const router = express.Router();

router.post('/postsPerangkat', upload.single('image'), create);
router.get('/postsPerangkat', fetchPosts);
router.put('/postsPerangkat/:id', upload.single('image'), edit); // Edit route
router.delete('/postsPerangkat/:id', remove); // Delete route

module.exports = router;
