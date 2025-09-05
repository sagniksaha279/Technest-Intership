const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Express API running on port ${PORT}`));
