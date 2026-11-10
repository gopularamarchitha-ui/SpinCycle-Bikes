
const express = require('express');
const router = express.Router();

const {
    getRentalDetails
} = require('../controllers/rentalController');

// Rental details API route
router.get('/rentals/details', getRentalDetails);

module.exports = router;

