SpinCycle Bikes
Project Overview
SpinCycle Bikes is a bicycle rental management backend API built with Node.js, Express.js, and SQLite. It provides endpoints to manage bikes, search bikes by type, validate incoming bike data, paginate bike listings, and retrieve rental information by joining the Riders, Bikes, and Rentals tables.
Technologies
- Node.js – JavaScript runtime
- Express.js – REST API framework
- SQLite – Relational database
- JavaScript – Application logic
- Postman – API testing
- Render – Deployment
Live API
- Base URL: https://spincycle-bikes.onrender.com
- Welcome endpoint: https://spincycle-bikes.onrender.com/
The deployed service may take a short time to respond after being idle.
Project Structure
SpinCycle-Bikes/
├── server.js
├── package.json
├── .gitignore
├── README.md
├── controllers/
│   ├── bikeController.js
│   └── rentalController.js
├── database/
│   ├── dbConnection.js
│   ├── schema.sql
│   └── sampleData.sql
├── middleware/
│   ├── validation.js
│   ├── search.js
│   └── pagination.js
├── routes/
│   ├── bikeRoutes.js
│   └── rentalRoutes.js
├── postman/
│   └── SpinCycle-Collection.json
└── Screenshots/
    └── API testing screenshots
Getting Started
Prerequisites
Install Node.js and npm. You can use Postman to test the endpoints.
Installation
1. Clone the repository:
   git clone https://github.com/gopularamarchitha-ui/SpinCycle-Bikes.git
2. Open the project folder:
   cd SpinCycle-Bikes
3. Install dependencies:
   npm install
4. Start the server:
   npm start
5. The API runs locally at:
   http://localhost:3000
The database connection module initializes the SQLite database from database/schema.sql and database/sampleData.sql when the server starts.
API Endpoints
Use the deployed base URL below, or replace it with http://localhost:3000 when testing locally.

Base URL: https://spincycle-bikes.onrender.com
Method	Endpoint	Description
GET	/	Welcome message
GET	/api/bikes	Get bikes
GET	/api/bikes/:id	Get one bike by ID
POST	/api/bikes	Add a bike
PUT	/api/bikes/:id	Update a bike
DELETE	/api/bikes/:id	Delete a bike
GET	/api/rentals/details	Get rental details with rider and bike information


Example: Add a Bike
Request: POST /api/bikes

Set the request body to JSON:
{
  "bike_name": "Electric Bike",
  "type": "Electric",
  "status": "Available"
}
Allowed status values are Available, Rented, and Maintenance. If status is omitted, the API defaults it to Available.
Example: Update a Bike
Request: PUT /api/bikes/1
{
  "bike_name": "Premium Mountain Bike",
  "type": "Mountain",
  "status": "Available"
}
Bike Search
Search bikes by type with the type query parameter.
GET /api/bikes?type=Mountain
The search uses a partial match, so it can return bikes whose type contains the supplied text. If no bikes match, the response contains an empty bikes array.
Pagination
The bike listing endpoint supports pagination with the page and limit query parameters.
- Default page: 1
- Default limit: 5
- Both values must be positive integers.
Example request	Purpose
/api/bikes?page=1&limit=2	Get the first page of up to two bikes
/api/bikes?page=2&limit=2	Get the second page
/api/bikes?page=0	Check invalid page handling
/api/bikes?limit=-2	Check invalid limit handling
/api/bikes?type=Mountain&page=1&limit=2	Combine search and pagination


The successful response includes the current page, limit, and bikes array.
Input Validation and Error Handling
Validation middleware checks incoming bike requests:
- bike_name must be a non-empty string.
- type must be a non-empty string.
- If supplied, status must be Available, Rented, or Maintenance.
- Bike IDs in the URL must be positive integers.
The API returns HTTP 400 for invalid input, 404 when a requested bike does not exist, and 500 if a server/database error occurs.
Database Design
The project uses SQLite and defines three tables in database/schema.sql:
- Riders – Stores rider names and email addresses.
- Bikes – Stores bike names, types, and availability status.
- Rentals – Stores rental dates and references the related rider and bike.
The foreign keys in the Rentals table connect rental records to Riders and Bikes. Sample records are inserted from database/sampleData.sql.
Rental Details JOIN
GET /api/rentals/details uses SQL INNER JOIN operations to combine rental records with the matching rider and bike details. The response includes the rider name and email, bike name and type, rental date, and return date.
Postman Testing
The Postman collection is included at:
postman/SpinCycle-Collection.json
Import this file into Postman to run the API requests. The screenshots below document the project tests.
API Testing Screenshots
1. Bike CRUD Operations
Get all bikes

Get a bike by ID

Add a bike

Update a bike

Delete a bike

2. Input Validation
Missing bike name

Missing bike type

Invalid bike status

3. Bike-Type Search
Search for Mountain bikes

Search for a type that does not exist

4. Pagination Tests
Pagination test 1

Pagination test 2

Pagination test 3

5. Rental Details – SQL JOIN

Team Contributions
- Member 1: Server setup and API integration.
- Member 2: Database connection, schema, and sample data.
- Member 3: Bike CRUD endpoints and rental details JOIN endpoint.
- Member 4: Bike input validation and bike-type search middleware.
- Member 5: Pagination middleware, Postman testing, and documentation.
Deployment
The application is deployed on Render:

https://spincycle-bikes.onrender.com

To deploy changes, push the updated project to the connected GitHub repository and allow the Render service to redeploy.
Conclusion
SpinCycle Bikes demonstrates a RESTful backend application with SQLite database integration, bike CRUD operations, input validation, search, pagination, and SQL JOIN queries. The included Postman collection and screenshots provide examples of API testing.
