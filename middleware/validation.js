
const validateBike = (req, res, next) => {
    const { bike_name, type, status } = req.body;

    if (typeof bike_name !== 'string' || bike_name.trim() === '') {
        return res.status(400).json({
            message: 'Bike name is required'
        });
    }

    if (typeof type !== 'string' || type.trim() === '') {
        return res.status(400).json({
            message: 'Bike type is required'
        });
    }

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

const validateBikeId = (req, res, next) => {
    const bikeId = Number(req.params.id);

    if (!Number.isInteger(bikeId) || bikeId <= 0) {
        return res.status(400).json({
            message: 'Invalid bike ID'
        });
    }

    next();
};

module.exports = { validateBike, validateBikeId };

