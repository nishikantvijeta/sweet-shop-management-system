# sweet-shop-management-system
# Project Overview

The Sweet Shop Management System is a full-stack web application designed to manage sweets, inventory, and purchases in a digital and user-friendly way.
It provides separate capabilities for customers and admins, ensuring smooth operations such as adding sweets, managing stock, and browsing available items.

This project demonstrates practical implementation of:

- RESTful APIs

- Authentication & authorization

- Image upload handling

- State management

- Full-stack integration using the MERN stack

# Features
# User Features

# Browse available sweets

- View sweet details (price, category, quantity)

- Search sweets by name or category

# Admin Features

- Add new sweets with image upload

- Manage inventory (price & quantity)

- Delete sweets (admin-only access)

# Technical Features

- JWT-based authentication

- Image upload support using FormData

- Redux Toolkit for state management

- Secure backend with proper validation
# Tech Stack
- Frontend

- React.js

- Redux Toolkit

- Tailwind CSS

- Axios

# Backend

- Node.js

- Express.js

- MongoDB 

- Multer (for image upload)

- JWT Authentication
 # Setup & Installation (Local)
# Prerequisites

- Node.js (v16+)

- MongoDB Atlas account

- Git

# Backend Setup
- cd server
- npm install

Create .env file like 
- PORT=5002
- MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sweetshop
- JWT_SECRET=your_jwt_secret
- cloudinary-


# MongoDB 
# Make sure you whitelist the IP:

- 0.0.0.0/0

- Start backend
- npm start


# You should see:

- Server running on port 5002
- MongoDB connected

# Frontend Setup
- cd client
- npm install
- npm start


# Frontend runs on:

- http://localhost:3000
  # ScreenShot
  <img width="1643" height="888" alt="image" src="https://github.com/user-attachments/assets/cb47771d-3fad-404b-b211-e246ec30c908" />
  <img width="1573" height="857" alt="image" src="https://github.com/user-attachments/assets/af7751ea-1957-483b-9bd6-de4bdb06c01e" />
  <img width="1350" height="872" alt="image" src="https://github.com/user-attachments/assets/62a7bf16-2eae-4491-84f1-4e44c672e667" />
  <img width="1776" height="642" alt="image" src="https://github.com/user-attachments/assets/8e30a87a-e5a9-4976-b1d8-d68f4281f97a" />
  <img width="1702" height="829" alt="image" src="https://github.com/user-attachments/assets/12c527b5-f971-4ac4-b5ff-1cdfa489fc22" />
  <img width="595" height="617" alt="image" src="https://github.com/user-attachments/assets/5137ea88-f252-4c18-8aaa-46e2587d1e72" />
 <img width="600" height="634" alt="image" src="https://github.com/user-attachments/assets/9abbb348-6d37-4bda-a08b-ed1503ed5d2d" />
<img width="704" height="778" alt="image" src="https://github.com/user-attachments/assets/5127229d-20b2-4e10-be6d-a8a3cb497a86" />

 # My AI Usage
# AI Tools Used

- ChatGPT 

- GitHub Copilot

- How I Used These AI Tools

- I used AI tools as development assistants to support learning, debugging, and productivity throughout the project.

## ChatGPT was used to:

- Understand and design REST API endpoints and overall backend flow.

- Debug frontend and backend issues such as network errors, CORS configuration, MongoDB connection problems, and image upload handling.

- Get clear explanations of React, Redux Toolkit, Express, and MongoDB concepts when I was stuck.

- Improve code structure and follow best practices, especially for form handling, error handling, and async API calls.

# GitHub Copilot was used to:

- Speed up writing repetitive boilerplate code in React components and Redux slices.

- Assist with auto-completing syntax while implementing forms, reducers, and API integration.

- Reduce development time by suggesting common patterns, which I then reviewed and adjusted as needed.








