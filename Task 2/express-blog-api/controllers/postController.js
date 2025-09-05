let posts = [];

exports.createPost = (req, res) => {
  const post = { id: posts.length + 1, ...req.body };
  posts.push(post);
  res.status(201).json(post);
};

exports.getPosts = (req, res) => {
  const { user_id } = req.query;
  if (user_id) {
    return res.json(posts.filter(p => p.user_id == user_id));
  }
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

exports.updatePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });
  posts[index] = { ...posts[index], ...req.body };
  res.json(posts[index]);
};

exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Post not found' });
  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
};
