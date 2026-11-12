const express = require('express');

const db = require('./database/dbConnection');
const bikeRoutes = require('./routes/bikeRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();

// Middleware
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to SpinCycle Bikes API!'
    });
});

// API routes
app.use('/api', bikeRoutes);
app.use('/api', rentalRoutes);

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// Server port
const PORT = process.env.PORT || 3000;

// Start server after database initialization
db.ready
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SpinCycle Bikes server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to initialize database:', err.message);
    });
