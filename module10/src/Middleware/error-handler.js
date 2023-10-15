function errorHandler(err, req, res, next) {
    console.error(err);

    if (err.name === 'ValidationError') {
        // Handle validation errors
        const errors = {};
        for (let field in err.errors) {
            errors[field] = err.errors[field].message;
        }
        return res.status(400).json({ errors });
    }

    if (err.name === 'UnauthorizedError') {
        // Handle JWT authentication errors
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Handle other errors
    res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;
