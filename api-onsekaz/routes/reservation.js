var express = require('express');
var router = express.Router();

const Reservation = require('../models/Reservation');

/* POST new reservation */
router.post('/', async function(req, res, next) {
    const reservation = new Reservation({
        user: req.user,
        annonce: req.body.annonce,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        customer_nb: req.body.customer_nb,
    });
    // check if dates are available
    // check if user is not the owner of the annonce
    if (reservation.start_date > reservation.end_date) {
        return res.status(400).json({ message: 'Start date must be before end date' });
    }
    if (reservation.start_date < Date.now()) {
        return res.status(400).json({ message: 'Start date must be in the future' });
    }
    if (reservation.customer_nb < 1) {
        return res.status(400).json({ message: 'Customer number must be at least 1' });
    }
    const foundReservation = await Reservation.find({ start_date: { $gte: reservation.start_date }, end_date: { $lte: reservation.end_date } });
    if (foundReservation.length != 0) {
        return res.status(400).json({ message: 'These dates are already booked !' });
    }

    reservation.save()
        .then(() => res.json(reservation))
        .catch(next);
});

/* GET user reservations */
router.get('/', function(req, res, next) {
    Reservation.find({ user: req.user }).populate('annonce').populate('user')
        .then(reservations => res.json(reservations))
        .catch(next);
});

/* POST Delete reservation */
router.post('/delete', async function(req, res, next) {
    const foundReservation = await Reservation.findById(req.body.id).populate("user")
    if (foundReservation.user._id == req.user._id) {
        foundReservation.deleteOne()
            .then(() => res.json({ message: 'Reservation deleted' }))
            .catch(next);
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

module.exports = router;
