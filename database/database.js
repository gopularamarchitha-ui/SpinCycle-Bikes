const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Connect to SQLite database
const dbPath = path.join(__dirname, 'spincycle.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to SpinCycle Bikes database');
    }
});

// Create tables and insert sample data
db.serialize(() => {

    db.run('PRAGMA foreign_keys = ON');

    // Execute schema.sql
    const schema = fs.readFileSync(
        path.join(__dirname, 'schema.sql'),
        'utf8'
    );

    db.exec(schema, (err) => {
        if (err) {
            console.error('Table creation error:', err.message);
        } else {
            console.log('Database tables created successfully');
        }
    });

    // Execute sampleData.sql
    const sampleData = fs.readFileSync(
        path.join(__dirname, 'sampleData.sql'),
        'utf8'
    );

    db.exec(sampleData, (err) => {
        if (err) {
            console.error('Sample data insertion error:', err.message);
        } else {
            console.log('Sample data inserted successfully');
        }
    });
});

module.exports = db;
