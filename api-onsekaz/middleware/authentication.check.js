const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        res.status(401).json({
            message: 'Unauthorized'
        });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded.user
        next();
    } catch (e) {
        res.status(403).json({
            message: e.message
        });
        return;
    }
};

module.exports = authCheck;