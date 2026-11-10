
const express = require('express');
const router = express.Router();

const {
    getAllBikes,
    getBikeById,
    addBike,
    updateBike,
    deleteBike
} = require('../controllers/bikeController');

// Bike API routes
router.get('/bikes', getAllBikes);
router.get('/bikes/:id', getBikeById);
router.post('/bikes', addBike);
router.put('/bikes/:id', updateBike);
router.delete('/bikes/:id', deleteBike);

module.exports = router;

