const pagination = (req, res, next) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 5);

    // Validate page and limit
    if (
        !Number.isInteger(page) ||
        !Number.isInteger(limit) ||
        page <= 0 ||
        limit <= 0
    ) {
        return res.status(400).json({
            message: 'Page and limit must be positive integers'
        });
    }

    // Calculate offset
    const offset = (page - 1) * limit;

    req.pagination = {
        page,
        limit,
        offset
    };

    next();
};

module.exports = pagination;
