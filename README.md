
# SpinCycle Bikes

## Project Description

SpinCycle Bikes is a bicycle rental management backend system developed using Node.js, Express.js and SQLite.

The system allows users to manage bicycles, view bike details, search bikes by type, and retrieve rental information.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Postman

## Project Structure

```text
SpinCycle-Bikes/
├── server.js
├── package.json
├── .gitignore
├── README.md
├── database/
│   ├── dbConnection.js
│   ├── schema.sql
│   └── sampleData.sql
├── routes/
│   ├── bikeRoutes.js
│   └── rentalRoutes.js
├── controllers/
│   ├── bikeController.js
│   └── rentalController.js
├── middleware/
│   └── validation.js
└── postman/
    └── SpinCycle-Collection.json
```

## Installation

1. Clone the repository:

   git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project folder:

   cd SpinCycle-Bikes

3. Install dependencies:

   npm install

4. Start the server:

   npm start

5. Open in your browser:

   http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/bikes | Get all bikes |
| GET | /api/bikes/:id | Get bike by ID |
| POST | /api/bikes | Add a bike |
| PUT | /api/bikes/:id | Update a bike |
| DELETE | /api/bikes/:id | Delete a bike |
| GET | /api/rentals/details | Get rental details |

## Bike Search

Search bikes by type:

GET /api/bikes?type=Mountain

## Pagination

The bike listing API supports pagination.

Example:

GET /api/bikes?page=1&limit=2

GET /api/bikes?page=2&limit=2

Invalid page numbers return a 400 Bad Request response.

## Testing

The APIs are tested using Postman.

Import the collection from:

postman/SpinCycle-Collection.json

## Database Tables

The SQLite database contains three tables:

1. Riders
2. Bikes
3. Rentals

Rental details are retrieved using SQL JOIN operations.

## Team Contributions

- Member 1: Server setup and API integration.
- Member 2: Database connection, table creation and sample data.
- Member 3: Bike CRUD APIs and rental JOIN API.
- Member 4: Input validation, error handling and bike search.
- Member 5: Pagination, Postman testing and documentation.

## Project Status

Backend development and API testing are in progress.

