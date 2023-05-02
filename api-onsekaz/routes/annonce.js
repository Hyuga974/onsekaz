const express = require('express');
const router = express.Router();

const authCheck = require('../middleware/authentication.check');

const annonceController = require('../controllers/annonce.controller');

router.get('/', async (req, res) => {
    annonceController.getAllAnnonces(req, res);
});

router.get('/protected', authCheck, async (req, res) => {
    res.json({ message: 'This is a protected route' });
});

module.exports = router;