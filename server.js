
const express = require('express');
const cors = require('cors');

const db = require('./database/dbConnection');
const bikeRoutes = require('./routes/bikeRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to SpinCycle Bikes API!'
    });
});

app.use('/api', bikeRoutes);
app.use('/api', rentalRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3000;

db.ready
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SpinCycle Bikes server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to initialize database:', err.message);
    });

