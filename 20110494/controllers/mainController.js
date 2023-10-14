const mygroup = require('../models/mygroup');

exports.getAllUser = (req, res) => {
  res.json(mygroup);
};

exports.addUser = (req, res) => {
  const newItem = req.body;

  if (mygroup.some((item) => item.id === newItem.id)) {
    res.status(400).json({ error: 'Not valid' });
  } else {
    mygroup.push(newItem);
    res.json(newItem);
  }
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  const User = mygroup.find((item) => item.id === id);

  if (User) {
    res.json(User);
  } else {
    res.status(404).json({ error: 'Not valid' });
  }
};
