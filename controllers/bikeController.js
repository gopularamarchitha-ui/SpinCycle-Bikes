
const db = require('../database/dbConnection');

// GET: View all bikes and search by type
const getAllBikes = (req, res) => {
    const { type } = req.query;

    let sql = 'SELECT * FROM Bikes';
    const params = [];

    // Search bikes by type
    if (type) {
        sql += ' WHERE type LIKE ?';
        params.push(`%${type.trim()}%`);
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving bikes',
                error: err.message
            });
        }

        res.status(200).json({
            message: 'Bikes retrieved successfully',
            bikes: rows
        });
    });
};

// GET: View one bike by ID
const getBikeById = (req, res) => {
    const bikeId = req.params.id;

    const sql = 'SELECT * FROM Bikes WHERE bike_id = ?';

    db.get(sql, [bikeId], (err, row) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving bike',
                error: err.message
            });
        }

        if (!row) {
            return res.status(404).json({
                message: 'Bike not found'
            });
        }

        res.status(200).json({
            message: 'Bike retrieved successfully',
            bike: row
        });
    });
};

// POST: Add a new bike
const addBike = (req, res) => {
    const { bike_name, type, status } = req.body;

    const sql = `
        INSERT INTO Bikes (bike_name, type, status)
        VALUES (?, ?, ?)
    `;

    db.run(
        sql,
        [bike_name.trim(), type.trim(), status || 'Available'],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: 'Error adding bike',
                    error: err.message
                });
            }

            res.status(201).json({
                message: 'Bike added successfully',
                bike_id: this.lastID
            });
        }
    );
};

// PUT: Update bike details
const updateBike = (req, res) => {
    const bikeId = req.params.id;
    const { bike_name, type, status } = req.body;

    const sql = `
        UPDATE Bikes
        SET bike_name = ?, type = ?, status = ?
        WHERE bike_id = ?
    `;

    db.run(
        sql,
        [bike_name.trim(), type.trim(), status || 'Available', bikeId],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: 'Error updating bike',
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: 'Bike not found'
                });
            }

            res.status(200).json({
                message: 'Bike updated successfully'
            });
        }
    );
};

// DELETE: Delete a bike
const deleteBike = (req, res) => {
    const bikeId = req.params.id;

    const sql = 'DELETE FROM Bikes WHERE bike_id = ?';

    db.run(sql, [bikeId], function (err) {
        if (err) {
            return res.status(500).json({
                message: 'Error deleting bike',
                error: err.message
            });
        }

        if (this.changes === 0) {
            return res.status(404).json({
                message: 'Bike not found'
            });
        }

        res.status(200).json({
            message: 'Bike deleted successfully'
        });
    });
};

module.exports = {
    getAllBikes,
    getBikeById,
    addBike,
    updateBike,
    deleteBike
};

