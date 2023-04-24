const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    annonce: { type: mongoose.Schema.Types.ObjectId, ref: 'Annonce' },
    score: Number,
    content: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;