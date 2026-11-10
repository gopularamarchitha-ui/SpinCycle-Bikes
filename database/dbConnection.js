
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'spincycle.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to SpinCycle Bikes database');
    }
});

db.ready = new Promise((resolve, reject) => {
    try {
        const schema = fs.readFileSync(
            path.join(__dirname, 'schema.sql'),
            'utf8'
        );

        const sampleData = fs.readFileSync(
            path.join(__dirname, 'sampleData.sql'),
            'utf8'
        );

        db.run('PRAGMA foreign_keys = ON', (err) => {
            if (err) return reject(err);

            db.exec(schema, (err) => {
                if (err) return reject(err);

                db.exec(sampleData, (err) => {
                    if (err) return reject(err);

                    console.log('Database initialized successfully!');
                    resolve();
                });
            });
        });
    } catch (err) {
        reject(err);
    }
});

module.exports = db;
