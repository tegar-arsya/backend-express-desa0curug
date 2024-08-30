const express = require('express');
const upload = require('../middleware/uploadGalleryMiddleware');
const { create, fetchPosts, edit, remove } = require('../controllers/postGalleryController');
const router = express.Router();

router.post('/postsGallery', upload.single('image'), create);
router.get('/postsGallery', fetchPosts);
router.put('/postsGallery/:id', upload.single('image'), edit);
router.delete('/postsGallery/:id', remove);

module.exports = router;
