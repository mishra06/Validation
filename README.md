# Getting Started with Create React App

# React Form Validation with Formik, Yup

## Description
This project is a React application that includes a user sign-up form with validation using Yup. The validation schema ensures that user inputs meet specific criteria, enhancing the overall user experience and data integrity.

## [Live Link](https://formicformvalidation.vercel.app/)

## Features
- **User Sign-Up**: A form that allows users to create an account.
- **Validation**: Utilizes Yup for validating user inputs, ensuring they meet defined requirements.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Formik:** A library for handling forms in React.
- **Yup:** A JavaScript schema builder for form validation.
- **ES6+:** Modern JavaScript features for cleaner and more efficient code.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (version 14.x or later)
- npm (Node Package Manager)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mishra06/Validation.git

# Install dependencies
npm install

# Run the application
npm start
```

### Validation Rules Explained:

- Name: Must be between 2 and 25 characters long.
- Email: Must be a valid email format and match a specific regex pattern (regex@gmail.com).
- Password: Must be at least 6 characters long, start with V_, and contain an @ symbol.
- Confirm Password: Must match the original password field.

## Usage

1. Fill in the form fields (name, email, password, confirm password).
2. Upon successful submission, a success message and the submitted user name will be displayed on alert.
3. The form will be reset upon submission.

