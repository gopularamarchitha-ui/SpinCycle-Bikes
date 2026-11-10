// Handles input validation and error handling
// Validate bike details
const validateBike = (req, res, next) => {
    const { bike_name, type, status } = req.body;

    // Check bike name
    if (
        typeof bike_name !== 'string' ||
        bike_name.trim() === ''
    ) {
        return res.status(400).json({
            message: 'Bike name is required'
        });
    }

    // Check bike type
    if (
        typeof type !== 'string' ||
        type.trim() === ''
    ) {
        return res.status(400).json({
            message: 'Bike type is required'
        });
    }

    // Check bike status
    if (
        status !== undefined &&
        !['Available', 'Rented', 'Maintenance'].includes(status)
    ) {
        return res.status(400).json({
            message: 'Status must be Available, Rented or Maintenance'
        });
    }

    next();
};

// Validate bike ID
const validateBikeId = (req, res, next) => {
    const bikeId = Number(req.params.id);

    if (!Number.isInteger(bikeId) || bikeId <= 0) {
        return res.status(400).json({
            message: 'Invalid bike ID'
        });
    }

    next();
};

module.exports = {
    validateBike,
    validateBikeId
};
