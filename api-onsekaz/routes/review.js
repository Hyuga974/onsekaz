var express = require('express');
var router = express.Router();

const Review = require('../models/Review');

/* POST new review */
router.post('/', async function(req, res, next) {

});

/* GET user reviews */
router.get('/', function(req, res, next) {
    Review.find({ user: req.user }).populate('annonce')
        .then(reviews => res.json(reviews))
        .catch(next);
});

/* POST Delete review */
router.post('/delete', function(req, res, next) {
    const foundRev = Review.findById(req.body.id);
    if (foundRev.user == req.user) {
        foundRev.delete()
            .then(() => res.json({ message: 'Reservation deleted' }))
            .catch(next);
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

module.exports = router;
