# Project name : AI Model Inventory Manager.

# Live URL site link : https://ai-model-inventory-sajibrahman0090.netlify.app/

## Project Overview

A web application to manage an inventory of AI models, allowing users to add, view, edit, and delete AI model entries with details like model name, framework, use case, and dataset. The app will be responsive, secure, and integrate with MongoDB for data storage and Firebase for authentication.

The application focuses on providing a smooth user experience with dynamic data handling, protected routes, and modern UI features like dark mode.

---

## Key Features:

### User Authentication

- User registration with name, email, photo URL, and password
- Login system with email and password
- Redirect to homepage after successful login
- Conditional UI (user image when logged in, login button when not)

### Home Page

- Dynamic slider section
- Dynamic data section showing 6 models from the database
- Model cards with "View Details" functionality

### Pages Structure

- Home Page
- All Models Page
- Add Model Page (Private Route)
- Model Details Page (Private Route)
- My Models Page (Private Route)
- My Purchases Page (Private Route)
- Update Model (Private Route)
- Delete Model (Private Route)

### Private Routing

- Protected routes for authenticated users only
- Unauthorized users are redirected to the login page

### Search & Filter

- Search models by keywords
- Filter models by categories or frameworks

### Purchase System

- Users can purchase models
- Purchased models are stored and displayed in a dedicated page

### My Models

- Users can view all models they have added
- Manage (update/delete) their own models

### Dark Mode

- Toggle between light and dark themes for better user experience

---

## Technology Stack:

### Frontend

- HTML
- CSS
- JavaScript
- React

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication & Security

- Firebase Authentication
- Firebase Admin SDK for token verification
- Secure API with user token validation

---

## Core Functionality Summary

- Users can create, read, update, and delete AI models
- Users can purchase models and track them
- Dynamic UI updates based on database data
- Secure communication between frontend and backend
- Role-based content visibility using authentication

---

## NPM Packages Used are :

- @tailwindcss/vite
- lucide-react
- react-dom
- react-helmet-async
- react-icons
- react-router
- react-toastify
- sweetalert2
- swiper
- tailwindcss

---

## Conclusion

This project represents a complete full-stack application with real-world features such as authentication, protected routes, dynamic data rendering, and secure API handling. It demonstrates how modern web technologies can be combined to build a scalable and user-focused platform.
