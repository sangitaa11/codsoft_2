# TripBliss-Travel booking website

TripBliss is a web application for booking flights, hotels, and car rentals. This project is built using Node.js, Express, MongoDB, and JavaScript, and it allows users to register, log in, search for and book various travel services.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Project Video](#Projectvideo)

## Features

- **User Registration and Authentication**: Users can create accounts, log in, and log out securely. Passwords are hashed for security.
- **Booking Services**: Users can book flights, hotels, and car rentals by providing necessary details.
- **Search Services**: Users can search for available flights, hotels, or cars.
- **User Dashboard**: Registered users have access to a personalized dashboard where they can view and manage their bookings.

## Installation

1. Clone this repository to your local machine.
2. Install Node.js and MongoDB if you haven't already.
3. Install project dependencies by running:

   ```bash
   npm install
4.Configure the database connection:
-Create a MongoDB database.
-Update the database connection settings in app.js.
5.Start the application:

    ```bash
    npm start
6.Access the application in your web browser at http://localhost:3000.

## Usage

- **User Registration**:
  - Navigate to `/register` to create a new user account.
- **User Login**:
  - Access the login page at `/login` to log in with your credentials.
- **Explore Navigation**:
  - Use the navigation menu for various actions:
    - Home: The main landing page.
    - About Us: Learn more about TripBliss.
    - Contact Us: Get in touch with us.
    - Dashboard: View and manage your bookings.
    - Search: Find and book flights, hotels, or car rentals.
- **Book Services**:
  - Follow the on-screen instructions to book travel services.
- **User Dashboard**:
  - View and manage your bookings on the dashboard.
- **JavaScript Functionality**:
  - This project utilizes JavaScript for client-side interactivity, form validation, and more.

## Configuration

### Database Connection

You can configure the project settings and database connection in `app.js`.

### Authentication

Authentication settings are defined in the Passport configuration in `app.js`.

## Dependencies

This project relies on several dependencies, including:

- Express
- MongoDB
- Mongoose
- Passport
- Bcrypt
- EJS (for rendering views)
- Bootstrap (for styling)
- and more (see `package.json` for a complete list)

## Project Video

[Watch the video](https://drive.google.com/file/d/1oO9IMK3b7qCo8txR1YANw0bEnTugnzTX/preview?usp=drive_link)

<iframe src="https://drive.google.com/file/d/1oO9IMK3b7qCo8txR1YANw0bEnTugnzTX/preview?usp=drive_link" width="640" height="480"></iframe>







