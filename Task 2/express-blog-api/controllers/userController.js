let users = [];

exports.createUser = (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
};

exports.getUsers = (req, res) => {
  res.json(users);
};
