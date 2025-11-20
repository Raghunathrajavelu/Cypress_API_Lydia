# Cypress API Test Project

This project contains API tests for **Reqres.in** using **Cypress**. The tests include registration and user retrieval endpoints. It also generates detailed test reports using Mochawesome.

## Features

- Test `POST /register` for successful user creation
- Test `POST /register` for missing password scenario
- Test `GET /users/:id` to retrieve user details
- Automatic screenshots on failed tests
- HTML report generation using Mochawesome

## Installation

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/Cypress_API_Lydia.git

Navigate to project folder:

cd Cypress_API_Lydia


Install dependencies:
npm install

Running Tests

Headless mode:

npx cypress run


Interactive GUI:

npx cypress open

API Key Usage (Optional)

If your API requires an API key:

const headers = {
  "Content-Type": "application/json",
  "x-api-key": "reqres-free-v1"
};

Reports

Test reports: cypress/reports/index.html

Screenshots for failed tests: cypress/screenshots/

Project Structure
Cypress_API_Lydia/
├── cypress/
│   ├── e2e/                 # Test specs
│   │   └── user_api.cy.js
│   ├── reports/             # Test reports
│   └── screenshots/         # Screenshots for failures
├── node_modules/
├── package.json
├── cypress.config.js
└── README.md
