-- Sample riders
INSERT OR IGNORE INTO Riders (rider_id, name, email)
VALUES
(1, 'Rahul', 'rahul@gmail.com'),
(2, 'Priya', 'priya@gmail.com'),
(3, 'Arun', 'arun@gmail.com'),
(4, 'Sneha', 'sneha@gmail.com');

-- Sample bikes
INSERT OR IGNORE INTO Bikes (bike_id, bike_name, type, status)
VALUES
(1, 'Mountain Bike', 'Mountain', 'Available'),
(2, 'Road Bike', 'Road', 'Available'),
(3, 'City Bike', 'City', 'Available'),
(4, 'Hybrid Bike', 'Hybrid', 'Available');

-- Sample rentals
INSERT OR IGNORE INTO Rentals
(rental_id, rider_id, bike_id, rental_date, return_date)
VALUES
(1, 1, 1, '2026-11-01', NULL),
(2, 2, 2, '2026-11-02', '2026-11-03'),
(3, 3, 3, '2026-11-04', NULL);
