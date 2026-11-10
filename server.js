const express = require('express');
const cors = require('cors');

// Import route files
const bikeRoutes = require('./routes/bikeRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to SpinCycle Bikes API!'
    });
});

// Register API routes
app.use('/api', bikeRoutes);
app.use('/api', rentalRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`SpinCycle Bikes server running at http://localhost:${PORT}`);
});
