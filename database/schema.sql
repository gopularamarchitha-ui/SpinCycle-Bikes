-- Riders table
CREATE TABLE IF NOT EXISTS Riders (
    rider_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- Bikes table
CREATE TABLE IF NOT EXISTS Bikes (
    bike_id INTEGER PRIMARY KEY AUTOINCREMENT,
    bike_name TEXT NOT NULL,
    type TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Available'
);

-- Rentals table
CREATE TABLE IF NOT EXISTS Rentals (
    rental_id INTEGER PRIMARY KEY AUTOINCREMENT,
    rider_id INTEGER NOT NULL,
    bike_id INTEGER NOT NULL,
    rental_date TEXT NOT NULL,
    return_date TEXT,

    FOREIGN KEY (rider_id) REFERENCES Riders(rider_id),
    FOREIGN KEY (bike_id) REFERENCES Bikes(bike_id)
);
