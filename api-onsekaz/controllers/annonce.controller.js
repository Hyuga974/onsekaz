const Annonce = require('../models/Annonce');

exports.getAllAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.find().populate('user', '-password');
        res.json(annonces);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}