const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    location: String,
    latitude: Number,
    longitude: Number,
    price: Number,
    rooms_nb: Number,
    beds_nb: Number,
    br_number: Number,
    property: {
        type: String,
        enum: ['house', 'appartement', 'guest_house', 'hotel']
    },
    type: {
        type: String,
        enum: ['full_housing', 'private_room']
    },
    max_customer: Number,
    description: String,
    photos: [String],
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;