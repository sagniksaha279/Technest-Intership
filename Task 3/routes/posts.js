import express from 'express';
import Post from '../models/Post.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const posts = await Post.find().populate('author', 'email role');
  res.json(posts);
});

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body || {};
  if (!title || !content) return res.status(400).json({ error: 'title and content are required' });

  const post = await Post.create({ title, content, author: req.user.id });
  res.status(201).json(post);
});

export default router;
