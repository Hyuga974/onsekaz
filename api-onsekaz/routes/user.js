const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/me', async (req, res) => {
    userController.getMe(req, res);
});

module.exports = router;