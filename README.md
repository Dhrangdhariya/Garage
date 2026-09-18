# Garage
# Garage

A full-stack two-wheeler service platform designed to connect vehicle owners with garages through a simple service-request workflow.

The project focuses on building a practical system rather than a collection of demo features — from authentication and OTP verification to service inquiries, garage-side management, and verified customer reviews.

## What it does

* User registration with OTP-based email verification
* Secure authentication using JWT and HTTP-only cookies
* Users can submit two-wheeler service inquiries
* Garage/admin can review, confirm, or reject inquiries
* Users can track their service requests
* Verified users can submit reviews
* Protected routes and role-based access
* MongoDB-based data management

## Tech Stack

**Frontend**

* React
* React Router
* Context API
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Nodemailer

## Architecture

The project follows a separated frontend/backend architecture with controllers, routes, middleware, models, and utilities on the server side.

The goal was to keep responsibilities separated so the application can be extended without turning the codebase into tightly coupled logic.

## Project Focus

Rather than treating this as a simple CRUD application, the project was built around a realistic service workflow:

**User → Service Inquiry → Garage Review → Confirmation / Rejection → Service → Verified Review**

This makes the project closer to an actual product workflow than a typical tutorial application.

## Status

Actively improving and experimenting with the architecture, security, and user experience as the project evolves.

## Author

Built as a hands-on full-stack project to explore how a real-world service platform can be designed, structured, and scaled.
