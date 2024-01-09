const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

module.exports = jwtAuthMiddleware;
