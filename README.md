# SpinCycle Bikes – Bike Rental Management System

## Project Overview

SpinCycle Bikes is a Bike Rental Management System developed using Node.js, Express.js, and SQLite. It provides RESTful APIs to manage bikes, search bikes by type, validate user inputs, handle pagination, and retrieve rental details.

This project was developed as a group project to gain practical experience in backend development, database integration, API creation, middleware, and API testing.

## Project Links

- **GitHub Repository:** https://github.com/gopularamarchitha-ui/SpinCycle-Bikes
- **Live Deployment:** https://spincycle-bikes.onrender.com

## Key Features

- View all bikes.
- Retrieve bike details using bike ID.
- Add new bikes.
- Update existing bike details.
- Delete bikes.
- Search bikes by type.
- Pagination for bike listings.
- Input validation using middleware.
- Retrieve rental details using SQL JOIN operations.
- SQLite database integration with sample data.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- REST API
- Postman
- Git and GitHub
- Render

## Project Structure

```text
SpinCycle-Bikes/
│
├── controllers/
│   ├── bikeController.js
│   └── rentalController.js
│
├── database/
│   ├── schema.js
│   └── sampledata.js
│
├── middleware/
│   ├── validation.js
│   ├── search.js
│   └── pagination.js
│
├── routes/
│   ├── bikeRoutes.js
│   └── rentalRoutes.js
│
├── Screenshots/
│   ├── member3-get-all-bikes.png
│   ├── member3-get-bike-by-id.png
│   ├── member3-add-bike.png
│   ├── member3-update-bike.png
│   ├── member3-delete-bike.png
│   ├── member3-rental-details.png
│   ├── member4-search-bikes.png
│   ├── member4-validation.png
│   ├── member5-pagination-page-1.png
│   ├── member5-pagination-page-2.png
│   └── member5-pagination-validation.png
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

*Note: Update the structure if your actual project filenames or folders are different.*

## Database Setup

The project uses SQLite for database management.

### Database Files

- **schema.js:** Defines and creates the required database tables.
- **sampledata.js:** Inserts sample records for testing the application.

The database stores information about bikes, riders, and rentals.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/gopularamarchitha-ui/SpinCycle-Bikes.git
```

### 2. Navigate to the Project Folder

```bash
cd SpinCycle-Bikes
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

If the project does not have a start script, run:

```bash
node server.js
```

The local server will run at:

```text
http://localhost:3000
```

## API Documentation

All API endpoints use the `/api` prefix.

### Bike Management APIs

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/bikes` | Retrieve all bikes |
| GET | `/api/bikes/:id` | Retrieve a bike by ID |
| POST | `/api/bikes` | Add a new bike |
| PUT | `/api/bikes/:id` | Update bike details |
| DELETE | `/api/bikes/:id` | Delete a bike |

### Rental API

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/rentals/details` | Retrieve rental details with rider and bike information |

## Example API Requests

### 1. Get All Bikes

```http
GET /api/bikes
```

### 2. Get Bike by ID

```http
GET /api/bikes/1
```

### 3. Add a New Bike

**Request:**

```http
POST /api/bikes
Content-Type: application/json
```

**Request Body:**

```json
{
  "bike_name": "Electric Bike",
  "type": "Electric",
  "status": "Available"
}
```

### 4. Update Bike Details

**Request:**

```http
PUT /api/bikes/1
Content-Type: application/json
```

**Request Body:**

```json
{
  "bike_name": "Premium Mountain Bike",
  "type": "Mountain",
  "status": "Available"
}
```

### 5. Delete a Bike

```http
DELETE /api/bikes/4
```

Use an existing bike ID when testing.

### 6. Get Rental Details

```http
GET /api/rentals/details
```

This endpoint uses SQL JOIN operations to retrieve rental information along with the related rider and bike details.

## Search and Pagination

The project supports searching bikes by type and displaying results in pages.

### Search Bikes by Type

```http
GET /api/bikes?type=Mountain
```

```http
GET /api/bikes?type=Road
```

### Pagination

```http
GET /api/bikes?page=1&limit=2
```

```http
GET /api/bikes?page=2&limit=2
```

### Combined Search and Pagination

```http
GET /api/bikes?type=Mountain&page=1&limit=2
```

## Input Validation

Middleware is used to validate API requests before they reach the controllers.

Validation includes:

- Bike name must not be empty.
- Bike type must not be empty.
- Bike status must be one of the supported values: `Available`, `Rented`, or `Maintenance`.
- Bike ID must be a positive integer.
- Pagination values must be valid positive integers.

Invalid requests return appropriate error responses.

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid request or validation error |
| 404 | Resource not found |
| 500 | Internal server error |

## API Testing Using Postman

Postman was used to test the REST APIs and verify their responses.

### Member 3 – Bike CRUD and Rental Details

| Test | Screenshot |
|---|---|
| Get All Bikes | [View Screenshot](Screenshots/member3-get-all-bikes.png) |
| Get Bike by ID | [View Screenshot](Screenshots/member3-get-bike-by-id.png) |
| Add a Bike | [View Screenshot](Screenshots/member3-add-bike.png) |
| Update a Bike | [View Screenshot](Screenshots/member3-update-bike.png) |
| Delete a Bike | [View Screenshot](Screenshots/member3-delete-bike.png) |
| Rental Details | [View Screenshot](Screenshots/member3-rental-details.png) |

### Member 4 – Validation and Search

| Test | Screenshot |
|---|---|
| Search Bikes by Type | [View Screenshot](Screenshots/member4-search-bikes.png) |
| Input Validation | [View Screenshot](Screenshots/member4-validation.png) |

### Member 5 – Pagination

| Test | Screenshot |
|---|---|
| Pagination – Page 1 | [View Screenshot](Screenshots/member5-pagination-page-1.png) |
| Pagination – Page 2 | [View Screenshot](Screenshots/member5-pagination-page-2.png) |
| Pagination Validation | [View Screenshot](Screenshots/member5-pagination-validation.png) |

*Note: Upload the actual Postman screenshots into the `Screenshots` folder using the filenames above. The links will work once the files are pushed to GitHub.*

## Team Contributions

| Team Member | Responsibilities |
|---|---|
| Member 1 | Server setup, dependencies, and API integration |
| Member 2 | SQLite database schema, sample data, and database connection |
| Member 3 | Bike CRUD operations and Rental JOIN functionality |
| Member 4 | Input validation middleware and bike-type search |
| Member 5 | Pagination middleware, Postman testing, and README documentation |

## Learning Outcomes

Through this project, we gained practical experience in:

- Building RESTful APIs using Node.js and Express.js.
- Connecting an application to an SQLite database.
- Performing CRUD operations.
- Writing SQL JOIN queries.
- Implementing middleware for validation, search, and pagination.
- Testing APIs using Postman.
- Collaborating through Git and GitHub.
- Deploying a backend application using Render.

## Conclusion

SpinCycle Bikes demonstrates the development of a backend Bike Rental Management System using Node.js, Express.js, and SQLite. The project combines database management, REST API development, middleware integration, and API testing in a collaborative group environment.
