const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    annonce: { type: mongoose.Schema.Types.ObjectId, ref: 'Annonce' },
    start_date: Date,
    end_date: Date,
    customer_nb: Number,
  });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;