// authentication controller

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register user
exports.register = async (req, res) => {
    const { errors } = User.validate
    if (errors) {
        res.status(400).json({ message: `Tout les champs sont obligatoires` });
    } else {
        try {
            // hash password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            //save user to database
            const newUser = new User(req.body);
            newUser.password = hashedPassword;
            newUser.username = req.body.username.toLowerCase();
            await newUser.save();

            res.status(201).json({ message: 'Utilisateur créé' });
        } catch (err) {
            if (err.name == 'ValidationError') {
                res.status(400).json({ message: err.message });
                return;
            }
            res.status(500).json({ trace: err.message, code: err.code, message: Object.keys(err.keyValue)[0] == 'email' ? `Cet email est déjà utilisé` : `Ce nom d'utilisateur est déjà utilisé` });
        }
    }
}

// login user
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            // user not found but we don't want to give away that the user doesn't exist
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET);
            res.cookie('access_token', token, { 
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite : 'none'
            });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// logout user
exports.logout = (req, res) => {
    res.clearCookie('access_token');
    res.status(200).json({ message: 'Logout successful' });
}