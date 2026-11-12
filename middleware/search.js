const searchBikeByType = (req, res, next) => {
    const type = req.query.type;

    // Check whether bike type is provided
    if (type && type.trim() !== '') {

        // Prepare search condition
        req.searchCondition = {
            sql: ' WHERE type LIKE ?',
            params: [`%${type.trim()}%`]
        };

    } else {

        // No search condition
        req.searchCondition = {
            sql: '',
            params: []
        };
    }

    // Move to the next middleware or controller
    next();
};

module.exports = searchBikeByType;
