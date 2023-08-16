# Jobs API

Welcome to the Jobs API repository! This API provides a comprehensive solution for managing job listings and user authentication. It offers a user-friendly API, robust security measures, MongoDB integration, and more.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Technologies Used

* Express.js: Backend framework for building robust APIs.

* MongoDB & Mongoose: Database management for storing job and user data.

* Swagger: Automatic API documentation to simplify usage.

* JSON Web Tokens (JWT): Secure user authentication.

* bcryptjs: Hashing library to enhance password security.

* express-rate-limit: Prevent abusive usage and ensure API stability.

## Features

- **User-friendly API Documentation**: Effortlessly explore and understand API endpoints using Swagger documentation.

- **Robust Authentication**: Secure user data with JSON Web Tokens (JWT) and bcryptjs for strong password hashing.

- **Efficient Error Handling**: Clear and meaningful error messages ensure better client understanding.

- **MongoDB Integration**: Utilize Mongoose to seamlessly connect and manage job and user data.

- **Rate Limiting**: Prevent abuse with express-rate-limit, ensuring fair usage of your API.

## Installation

To set up and run the Jobs API on your system, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dhrumitpatel48/Jobs-API.git
2. Install dependencies::

   ```bash
   npm install
3. Configure environment variables:

    Create a .env file in the root directory and set the following:
   ```bash
   PORT=3000
   DATABASE_URI=your_database_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=expirey_time
4. Run the API:
   ```bash
   npm start

## Usage

* Explore the key API endpoints to manage jobs and users:

* Sign Up: POST /auth/signup - Register a new user.

* Login: POST /auth/login - Authenticate a user and receive a JWT token.

* Get Jobs: GET /jobs - Retrieve a list of all job listings.

* Get Job by ID: GET /jobs/:id - Fetch details about a specific job.

* Create Job: POST /jobs - Create a new job posting.

* Update Job: PUT /jobs/:id - Update information about a job.

* Delete Job: DELETE /jobs/:id - Delete a job listing.

Remember to replace your_database_connection_string and your_jwt_secret with actual values.

## API Documentation
Access the Swagger API documentation to understand available endpoints and their usage
