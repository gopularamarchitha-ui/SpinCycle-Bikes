
const express = require('express');
const router = express.Router();

// Import bike controllers
const {
    getAllBikes,
    getBikeById,
    addBike,
    updateBike,
    deleteBike
} = require('../controllers/bikeController');

// Import validation middleware
const {
    validateBike,
    validateBikeId
} = require('../middleware/validation');
const searchBikeByType = require('../middleware/search');
const pagination = require('../middleware/pagination');

// GET: View all bikes and search by type
// GET: View all bikes, search by type, and pagination
router.get(
    '/bikes',
    searchBikeByType,
    pagination,
    getAllBikes
);

// GET: View one bike
router.get('/bikes/:id', validateBikeId, getBikeById);

// POST: Add a bike
router.post('/bikes', validateBike, addBike);

// PUT: Update a bike
router.put(
    '/bikes/:id',
    validateBikeId,
    validateBike,
    updateBike
);

// DELETE: Delete a bike
router.delete('/bikes/:id', validateBikeId, deleteBike);
router.get(
    '/bikes',
    searchBikeByType,
    pagination,
    getAllBikes
);

module.exports = router;


