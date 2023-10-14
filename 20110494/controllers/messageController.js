const mygroup = require('../models/mygroup');

exports.getMessageHaveID = (req, res) => {
  const id = req.params.id;
    const user = mygroup.find((item) => item.id === id);
    if (user) {
      res.send(`<html><body><ul><li>${user.name}</li></ul></body></html>`);
    } else {
      res.status(404).send('Not valid');
    }
};

exports.getMessageNoID = (req, res) => {
  const userNames = mygroup.map((item) => `<li>${item.name}</li>`).join('');
  res.send(`<html><body><ul>${userNames}</ul></body></html>`);
};
