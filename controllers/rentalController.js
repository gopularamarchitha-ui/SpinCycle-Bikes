// Handles rental details and database JOIN operations

const db = require('../database/dbConnection');

// GET: View rental details with rider and bike information
const getRentalDetails = (req, res) => {

    const sql = `
        SELECT
            Rentals.rental_id,
            Riders.name AS rider_name,
            Riders.email AS rider_email,
            Bikes.bike_name,
            Bikes.type AS bike_type,
            Rentals.rental_date,
            Rentals.return_date
        FROM Rentals
        INNER JOIN Riders
            ON Rentals.rider_id = Riders.rider_id
        INNER JOIN Bikes
            ON Rentals.bike_id = Bikes.bike_id
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving rental details',
                error: err.message
            });
        }

        res.status(200).json({
            message: 'Rental details retrieved successfully',
            rentals: rows
        });
    });
};

module.exports = {
    getRentalDetails
};
