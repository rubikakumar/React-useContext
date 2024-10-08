# React UseContext

## Project Overview

The **React UseContext** project demonstrates how to manage state across components using React's Context API. It includes a shopping cart feature where users can add products, adjust quantities, and view the total amount. This project showcases how to use `useContext` and `useState` hooks effectively in a functional React application.

## Features

- Dynamic product listing with images, titles, descriptions, and prices.
- Ability to add products to the cart and adjust quantities.
- Real-time calculation of total quantity and total amount for all items in the cart.
- Responsive design that adapts to various screen sizes.

## Technologies Used

- React
- React Hooks (useState, useContext)
- Bootstrap for styling
- JavaScript

## Setup and Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rubikakumar/React-useContext.git

2. Navigate to the project directory:
   cd React-useContext

3. Install the dependencies:
   npm install

4. Start the application:
   npm start

5. Open your browser and go to http://localhost:5174/ to view the application.

## Running the Application

Once you have followed the setup instructions, you can run the application and start using the cart feature. You can view the products, add them to the cart, adjust quantities, and see the total amount update in real time.

## Code Explanation

**App.jsx**: This is the main component where product data is defined and passed down through the UserContext.
**CartCard.jsx**: A functional component that displays the products and manages the cart's quantities and total amounts.
**index.css**: Contains styles for the application, ensuring a visually appealing layout and responsive design.

## Development Process

This project was developed to explore the capabilities of React and the Context API. The focus was on creating a smooth user experience while effectively managing state across components.
