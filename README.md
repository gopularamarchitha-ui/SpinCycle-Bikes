SpinCycle Bikes – Bike Rental Management System
Project Overview
SpinCycle Bikes is a backend Bike Rental Management System built using Node.js, Express.js, and SQLite. It provides REST APIs to manage bike records, search bikes by type, validate requests, paginate results, and view rental information by combining data from the Riders, Bikes, and Rentals tables.

The project demonstrates REST API development, database connectivity, SQL CRUD operations, JOIN queries, middleware, and API testing with Postman.
Features
- Retrieve all bikes.
- Retrieve an individual bike using its ID.
- Add a new bike.
- Update existing bike details.
- Delete a bike.
- Search bikes by bike type.
- Paginate bike listings using page and limit.
- Validate bike details, bike IDs, and pagination values.
- Retrieve rental details with rider and bike information using SQL INNER JOIN.
- Initialize the SQLite database and sample records when the server starts.
Technologies Used
Technology	Purpose
Node.js	JavaScript runtime
Express.js	REST API and routing
SQLite	Relational database
sqlite3	Node.js SQLite driver
JavaScript	Application logic
Postman	API testing
Git and GitHub	Version control and collaboration


Project Structure
SpinCycle-Bikes/
├── controllers/
│   ├── bikeController.js
│   └── rentalController.js
├── database/
│   ├── dbConnection.js
│   ├── schema.sql
│   └── sampleData.sql
├── middleware/
│   ├── pagination.js
│   ├── search.js
│   └── validation.js
├── routes/
│   ├── bikeRoutes.js
│   └── rentalRoutes.js
├── Screenshots/
│   ├── Add a bike-POST.jpeg
│   ├── DELETE.jpeg
│   ├── Invalid bike status.jpeg
│   ├── Missing bike name.jpeg
│   ├── Missing bike type.jpeg
│   ├── Search for Mountain bikes.jpeg
│   ├── Search for a type that does not exist.jpeg
│   ├── Update a bike- PUT.jpeg
│   ├── get all.png
│   ├── get by id.jpeg
│   ├── rental details-JOIN.jpeg
│   ├── test 1.jpeg
│   ├── test 2.jpeg
│   └── test 3.jpeg
├── postman/
│   └── SpinCycle-Collection.json
├── server.js
├── package.json
└── README.md
Database Design
The application uses three relational tables:
1. Bikes
Stores information about the bikes available in the rental system.
Column	Description
bike_id	Primary key; unique bike ID
bike_name	Name of the bike
type	Bike category, such as Mountain, Road, City, or Hybrid
status	Current status: Available, Rented, or Maintenance


2. Riders
Stores the details of customers who rent bikes.
Column	Description
rider_id	Primary key; unique rider ID
name	Rider name
email	Rider email address; unique


3. Rentals
Stores the rental records and connects riders with bikes.
Column	Description
rental_id	Primary key; unique rental ID
rider_id	Foreign key referencing Riders(rider_id)
bike_id	Foreign key referencing Bikes(bike_id)
rental_date	Date on which the bike was rented
return_date	Date on which the bike was returned; can be empty for an active rental


Relationships:
- One rider can have multiple rental records.
- One bike can appear in multiple rental records over time.
- The Rentals table connects Riders and Bikes using foreign keys.
The database schema is defined in database/schema.sql. Sample records are stored in database/sampleData.sql. The database connection file creates the SQLite database, creates the tables, and inserts the sample records when the application starts.
Installation and Setup
Prerequisites
Install the following before running the project:
- Node.js (includes npm)
- A code editor such as Visual Studio Code
- Postman (for testing the APIs)
1. Clone the repository
git clone https://github.com/gopularamarchitha-ui/SpinCycle-Bikes.git
2. Open the project folder
cd SpinCycle-Bikes
3. Install dependencies
npm install
4. Start the server
npm start
The server uses port 3000 by default. If the PORT environment variable is set, the application uses that port instead.

Open the following URL in your browser:
http://localhost:3000
A successful response from the root route is:
{
  "message": "Welcome to SpinCycle Bikes API!"
}
The SQLite database file is created automatically in the database folder when the server initializes.
API Documentation
All API endpoints are available under the /api prefix.
Bike APIs
HTTP Method	Endpoint	Description
GET	/api/bikes	Get bikes (default page and limit)
GET	/api/bikes/:id	Get a bike by ID
POST	/api/bikes	Add a new bike
PUT	/api/bikes/:id	Update a bike
DELETE	/api/bikes/:id	Delete a bike


Rental API
HTTP Method	Endpoint	Description
GET	/api/rentals/details	Get rental details with rider and bike information


API Request Examples
Replace localhost:3000 with your deployed API base URL when testing the deployed application.
1. Get all bikes
GET http://localhost:3000/api/bikes
2. Get a bike by ID
GET http://localhost:3000/api/bikes/1
3. Add a bike
POST http://localhost:3000/api/bikes
Content-Type: application/json
Request body:
{
  "bike_name": "Electric Bike",
  "type": "Electric",
  "status": "Available"
}
The status field is optional. If it is not provided, the application sets it to Available.
4. Update a bike
PUT http://localhost:3000/api/bikes/1
Content-Type: application/json
Request body:
{
  "bike_name": "Premium Mountain Bike",
  "type": "Mountain",
  "status": "Available"
}
5. Delete a bike
DELETE http://localhost:3000/api/bikes/1
Use an existing bike ID when testing.
6. Get rental details
GET http://localhost:3000/api/rentals/details
This API uses SQL INNER JOIN operations to return rental information together with the related rider and bike details.
Search and Pagination
The bike listing API supports searching and pagination through query parameters.
Search bikes by type
GET http://localhost:3000/api/bikes?type=Mountain
Example for a different type:
GET http://localhost:3000/api/bikes?type=Road
The search is performed using SQL LIKE, so it can match part of a bike type.
Pagination
GET http://localhost:3000/api/bikes?page=1&limit=2
GET http://localhost:3000/api/bikes?page=2&limit=2
- page specifies the page number.
- limit specifies the number of bikes displayed on each page.
- The default values are page=1 and limit=5.
Search and pagination together
GET http://localhost:3000/api/bikes?type=Mountain&page=1&limit=2
Middleware and Validation
The project uses middleware to process and validate requests before they reach the controllers.
Validation middleware (middleware/validation.js)
- Bike name must be a non-empty string.
- Bike type must be a non-empty string.
- Bike status, when supplied, must be Available, Rented, or Maintenance.
- Bike ID must be a positive integer.
Search middleware (middleware/search.js)
- Reads the type query parameter.
- Builds a parameterized SQL condition to filter bikes by type.
- Returns all bike types when no search type is supplied.
Pagination middleware (middleware/pagination.js)
- Reads page and limit from the query string.
- Checks that both values are positive integers.
- Calculates the offset used by the SQL query.
Postman Testing and Screenshots
The Postman collection is available at postman/SpinCycle-Collection.json. Import this file into Postman to access the API requests.

The following screenshots are included in the Screenshots folder. Open each image by selecting its link.
Bike CRUD operations
Operation	Screenshot
Get all bikes	
Get bike by ID	
Add a bike (POST)	
Update a bike (PUT)	
Delete a bike	


Search and validation
Test	Screenshot
Search for Mountain bikes	
Search for a type that does not exist	
Missing bike name	
Missing bike type	
Invalid bike status	


Rental JOIN and additional tests
Test	Screenshot
Rental details using JOIN	
Additional test 1	
Additional test 2	
Additional test 3	


HTTP Status Codes
Status code	Meaning
200	Request completed successfully
201	Resource created successfully
400	Invalid input or validation error
404	Requested resource or route not found
500	Internal server or database error


Deployment
The project repository includes the following project links:
- GitHub Repository: https://github.com/gopularamarchitha-ui/SpinCycle-Bikes
- Live Deployment: https://spincycle-bikes.onrender.com
For deployment, configure the hosting service to install dependencies and run the application with npm start. The application reads the port from the PORT environment variable when it is provided by the hosting platform.
Team Contributions
The project can be divided into the following work areas:
Work area	Responsibilities
Server and API setup	Express server configuration and route integration
Database	SQLite connection, table creation, and sample data
Bike management	Bike CRUD operations
Search and validation	Bike-type search and request validation
Pagination and testing	Pagination middleware, Postman testing, and documentation


Learning Outcomes
Through this project, we gained practical experience in:
- Creating RESTful APIs using Node.js and Express.js.
- Connecting a backend application to an SQLite database.
- Performing Create, Read, Update, and Delete (CRUD) operations.
- Designing relational tables with primary keys and foreign keys.
- Retrieving related data using SQL JOIN operations.
- Writing middleware for validation, searching, and pagination.
- Testing API endpoints and responses using Postman.
- Organizing and maintaining a collaborative project using Git and GitHub.
Conclusion
SpinCycle Bikes is a backend Bike Rental Management System that demonstrates how REST APIs, SQLite database operations, SQL JOIN queries, and Express middleware work together. It provides a practical example of managing bike and rental information through a structured backend application.
