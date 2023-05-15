var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller');

/* POST register user. */
router.post('/register', function(req, res, next) {
    authController.register(req, res);
});

/* POST login user. */
router.post('/login', function(req, res, next) {
    authController.login(req, res);
});

/* GET logout user. */
router.post('/logout', function(req, res, next) {
    authController.logout(req, res);
});

module.exports = router;
