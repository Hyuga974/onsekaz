// users controller

const User = require('../models/User');

exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};