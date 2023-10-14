const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const messageController = require('../controllers/messageController');

router.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
router.get('/', mainController.getAllUser);
router.post('/20110494/:id', mainController.addUser);
router.get('/20110494/:id', mainController.getUserById);
router.get('/message/:id', messageController.getMessageHaveID);
router.get('/message',messageController.getMessageNoID);

module.exports = router;
