# SpinCycle Bikes

## Project Description

SpinCycle Bikes is a bicycle rental management backend system developed using Node.js, Express.js, and SQLite.

The system allows users to manage bicycles, view bike details, search bikes by type, validate bike information, and retrieve rental details.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Postman
- Git and GitHub
- Render

## Live Deployment

**Deployed API URL:**  
https://spincycle-bikes.onrender.com

**Welcome endpoint:**  
https://spincycle-bikes.onrender.com/

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
├── postman/
│   └── SpinCycle-Collection.json
└── Screenshots/
    ├── get all.png
    ├── get by id.jpeg
    ├── Add a bike-POST.jpeg
    ├── Update a bike- PUT.jpeg
    ├── DELETE.jpeg
    ├── rental details-JOIN.jpeg
    ├── Missing bike name.jpeg
    ├── Missing bike type.jpeg
    ├── Invalid bike status.jpeg
    ├── Search for Mountain bikes.jpeg
    ├── Search for a type that does not exist.jpeg
    ├── test 1.jpeg
    ├── test 2.jpeg
    └── test 3.jpeg
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/gopularamarchitha-ui/SpinCycle-Bikes.git
   ```

2. Navigate to the project folder:

   ```bash
   cd SpinCycle-Bikes
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open the following URL in your browser:

   ```text
   http://localhost:3000
   ```

## API Endpoints

**Base URL:** `https://spincycle-bikes.onrender.com`

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/bikes` | Retrieve all bikes |
| GET | `/api/bikes/:id` | Retrieve a bike by ID |
| POST | `/api/bikes` | Add a new bike |
| PUT | `/api/bikes/:id` | Update bike details |
| DELETE | `/api/bikes/:id` | Delete a bike |
| GET | `/api/rentals/details` | Retrieve rental details |

## Bike Search

The API supports searching bikes by type using the `type` query parameter.

**Example:**

```text
GET /api/bikes?type=Mountain
```

- Returns bikes matching the requested type.
- Returns an empty result when no matching bikes are found.

## Pagination

The bike listing API supports pagination using the `page` and `limit` query parameters.

**Default values:**

- Page: 1
- Limit: 5

**Test cases:**

| Request | Expected Status | Description |
|---|---|---|
| `/api/bikes?page=1&limit=2` | 200 | Retrieves the first 2 bikes |
| `/api/bikes?page=2&limit=2` | 200 | Retrieves the next 2 bikes |
| `/api/bikes?page=0` | 400 | Rejects an invalid page |
| `/api/bikes?limit=-2` | 400 | Rejects a negative limit |

The response includes the total number of bikes, current page, and the bike records for that page.

## Input Validation and Error Handling

The API validates bike information before processing POST and PUT requests.

Validation includes:

- Bike name is required.
- Bike type is required.
- Bike status must be `Available`, `Rented`, or `Maintenance`.
- Bike ID must be a valid positive integer.

Invalid requests return an appropriate HTTP error response with an explanatory message.

## Database

The project uses SQLite as its database.

It contains three main tables:

1. **Riders** – Stores rider information.
2. **Bikes** – Stores bicycle information.
3. **Rentals** – Stores rental records.

Primary keys and foreign keys maintain relationships between the tables.

The rental details API uses SQL JOIN operations to retrieve related information from the Riders, Bikes, and Rentals tables.

## Postman Testing

Postman is used to test the API endpoints.

The Postman collection is available at:

`postman/SpinCycle-Collection.json`

Testing covers:

- Bike CRUD operations.
- Input validation.
- Bike-type search.
- Pagination.
- Rental details using SQL JOIN.

## Postman Testing Screenshots

The following screenshots are stored in the `Screenshots` folder.

### 1. Bike CRUD Operations

**Get All Bikes**

![Get All Bikes](<Screenshots/get all.png>)

**Get Bike by ID**

![Get Bike by ID](<Screenshots/get by id.jpeg>)

**Add a Bike**

![Add a Bike](<Screenshots/Add a bike-POST.jpeg>)

**Update a Bike**

![Update a Bike](<Screenshots/Update a bike- PUT.jpeg>)

**Delete a Bike**

![Delete a Bike](<Screenshots/DELETE.jpeg>)

### 2. Input Validation

**Missing Bike Name**

![Missing Bike Name](<Screenshots/Missing bike name.jpeg>)

**Missing Bike Type**

![Missing Bike Type](<Screenshots/Missing bike type.jpeg>)

**Invalid Bike Status**

![Invalid Bike Status](<Screenshots/Invalid bike status.jpeg>)

### 3. Bike Search

**Search for Mountain Bikes**

![Search Mountain Bikes](<Screenshots/Search for Mountain bikes.jpeg>)

**Search for a Bike Type That Does Not Exist**

![Search No Results](<Screenshots/Search for a type that does not exist.jpeg>)

### 4. Pagination Testing

**Pagination Test 1**

![Pagination Test 1](<Screenshots/test 1.jpeg>)

**Pagination Test 2**

![Pagination Test 2](<Screenshots/test 2.jpeg>)

**Pagination Test 3**

![Pagination Test 3](<Screenshots/test 3.jpeg>)

### 5. Rental Details Using JOIN

![Rental Details](<Screenshots/rental details-JOIN.jpeg>)

## Team Contributions

- **Member 1:** Server setup and API integration.
- **Member 2:** Database connection, table creation, and sample data.
- **Member 3:** Bike CRUD APIs and rental JOIN API.
- **Member 4:** Input validation, error handling, and bike-type search.
- **Member 5:** Pagination, Postman testing, and documentation.

## Project Status

The SpinCycle Bikes backend project includes bike management APIs, database integration, input validation, bike-type search, pagination, and rental details retrieval.

The application is deployed on Render, and API endpoints are tested using Postman.
