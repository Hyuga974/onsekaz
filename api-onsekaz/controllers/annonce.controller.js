const Annonce = require('../models/Annonce');
const Review = require('../models/Review');

exports.getAllAnnonces = async (req, res) => {
    const search = req.query.search || '';

    try {
        const annonces = await Annonce.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } },
            ]
        }).populate('user', '-password');
        res.json(annonces);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

exports.getAnnonceById = async (req, res) => {
    try {
        const annonce = await Annonce.findById(req.params.id).populate('user', '-password');
        const reviews = await Review.find({ annonce: req.params.id }).populate('user', '-password');
        res.json({ annonce, reviews });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

exports.getFourNewest = async (req, res) => {
    try {
        const annonces = await Annonce.find().sort({ createdAt: -1 }).limit(4).populate('user', '-password');
        res.json(annonces);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

exports.getFourBestRated = async (req, res) => {
    try {
        const reviews = await Review.find().populate('annonce').populate('user', '-password')

        const annonces = reviews.sort((a, b) => b.rating - a.rating).slice(0, 4).map(review => review.annonce);
        res.json(annonces);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}
