Clinical Data Reconciliation Engine — Frontend

This project is the React frontend for the Clinical Data Reconciliation Engine.
It provides a simple interface for testing and interacting with the backend APIs.

Features

Patient Data Reconciliation

Medication Reconciliation

Data Quality Validation

JSON request input

API response viewer

Backend API

Backend repository:

https://github.com/Abrehaberhie/clinical-data-reconciliation-engine

Requirements

Node.js

npm

Installation

Clone the repository:

git clone https://github.com/Abrehaberhie/ehr-reconciliation-frontend.git
cd ehr-reconciliation-frontend

Install dependencies:

npm install
Run the Application

Start the development server:

npm start

The frontend will run at:

http://localhost:3000
Backend Requirement

The Spring Boot backend must be running at:

http://localhost:8080
API Endpoints Used

Patient Reconciliation
POST /api/reconciliation

Medication Reconciliation
POST /api/reconcile/medication

Data Quality Validation
POST /api/validate/data-quality

Technologies Used

React

Axios

JavaScript

Spring Boot (Backend)

Author

Abreha Gebreslasie
GitHub: https://github.com/Abrehaberhie