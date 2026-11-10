
const db = require('../database/dbConnection');


const getAllBikes = (req, res) => {
    // Get pagination and search values
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const type = req.query.type;

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

    // Build SQL query
    let sql = 'SELECT * FROM Bikes';
    let countSql = 'SELECT COUNT(*) AS total FROM Bikes';

    const params = [];
    const countParams = [];

    // Search by bike type if provided
    if (type && type.trim()) {
        sql += ' WHERE type LIKE ?';
        countSql += ' WHERE type LIKE ?';

        params.push(`%${type.trim()}%`);
        countParams.push(`%${type.trim()}%`);
    }

    // Add pagination
    sql += ' ORDER BY bike_id LIMIT ? OFFSET ?';

    params.push(limit, offset);

    // Get total number of matching bikes
    db.get(countSql, countParams, (countError, countResult) => {
        if (countError) {
            return res.status(500).json({
                message: 'Error counting bikes',
                error: countError.message
            });
        }

        // Get bikes for the requested page
        db.all(sql, params, (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error retrieving bikes',
                    error: err.message
                });
            }

            res.status(200).json({
                message: 'Bikes retrieved successfully',
                pagination: {
                    page: page,
                    limit: limit,
                    totalBikes: countResult.total,
                    totalPages: Math.ceil(countResult.total / limit)
                },
                bikes: rows
            });
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

