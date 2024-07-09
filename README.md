# Real-Time Chatting Web Application Frontend

This is the frontend for a real-time chatting web application built using React.js, WebSockets, and Lottie animations, with full authentication functionality.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- Real-time messaging using WebSockets
- User authentication (signup, login, logout)
- Animated UI using Lottie animations
- Responsive design
- User-friendly interface

## Technologies

- **React.js**: JavaScript library for building user interfaces
- **WebSockets**: Protocol for real-time communication
- **Lottie**: Library for rendering animations
- **React Router**: For routing and navigation
- **React Redux**: For state management
- **Styled Components**: For styling the components

## Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/Upiottxat/Hello-chat-client-react.git
   
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the root directory and add your environment variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    REACT_APP_WS_URL=ws://localhost:5000/ws
    ```

4. **Start the development server**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

### Authentication

- **Signup**: Users can sign up with their email and password.
- **Login**: Users can log in with their email and password.
- **Logout**: Users can log out of their account.

### Real-Time Chat

- **Join a Chat**: Users can join a chat room.
- **Send Messages**: Users can send messages in real-time.
- **Receive Messages**: Users can receive messages in real-time.

### Animations

- **Lottie Animations**: Various animations are used to enhance the user experience.




