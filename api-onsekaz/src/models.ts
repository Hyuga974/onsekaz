const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  username: String,
});

const annonceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  location: Number,
  latitude: Number,
  price: Number,
  rooms_nb: Number,
  beds_nb: Number,
  br_number: Number,
  property: { type: String, enum: ['house', 'appartement', 'guest_house', 'hotel'] },
  type: { type: String, enum: ['full_housing', 'private_room'] },
  max_customer: Number,
  description: String,
  photos: [String],
});

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  annonce: { type: mongoose.Schema.Types.ObjectId, ref: 'Annonce' },
  start_date: Date,
  end_date: Date,
  customer_nb: Number,
});

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  annonce: { type: mongoose.Schema.Types.ObjectId, ref: 'Annonce' },
  score: Number,
  content: String,
});

const User = mongoose.model('User', userSchema);
const Annonce = mongoose.model('Annonce', annonceSchema);
const Reservation = mongoose.model('Reservation', reservationSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { User, Annonce, Reservation, Review };
