# Result-Management-System
The Result Management System is a web application developed to streamline student result management and display processes for educational institutions. It features a secure Admin Dashboard for managing student marks and a Student Portal where students can view their results by entering a unique ID. Built using the MERN stack (MongoDB, Express, React, Node.js), this application supports seamless data handling, validation, and file upload for bulk result management.

Table of Contents
Features
Technologies Used
Installation
Usage
Folder Structure
API Endpoints
Contributing
License
Features
Admin Dashboard:

Secure login for admin access.
Tab-based navigation for managing results across various categories (e.g., Attendance, Assessment).
Data entry form with validation and bulk upload via Excel files.
Total score calculation and individual score display.
Student Portal:

Allows students to retrieve their marks by entering a unique ID.
Displays individual scores and total marks.
Data Validation:

Backend validation for accurate data entry.
Error handling for file uploads with user-friendly error messages.
Technologies Used
Frontend: ReactJS, Bootstrap, Axios
Backend: NodeJS, ExpressJS, MongoDB
Database: MongoDB (using Mongoose for schema validation)
Deployment: Vercel
Version Control: Git/GitHub

Usage
Admin Dashboard
Log in to access the admin panel.
Use tab navigation to manage specific result categories.
Upload an Excel file or manually enter data for results.
View individual student scores or total marks in the dashboard.

Student Portal
Enter a unique student ID to view specific results.
Display individual scores along with total marks calculated automatically.

API Endpoints
Admin APIs
GET /api/results - Fetch all results.
GET /api/results/:id - Get result by student ID.
POST /api/results - Add new results.
POST /api/results/upload - Upload Excel file with results.

Student APIs
GET /api/results/:id - Retrieve results for a specific student ID.

Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check issues page if you want to contribute.
