

# Talkify: Real-Time Chat Application

**Talkify** is a real-time chat application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This project serves as a hands-on learning platform for implementing core chat application features with modern web development technologies.

## Table of Contents
- [Introduction](#introduction)
- [Project Purpose](#project-purpose)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Challenges](#challenges)
- [Limitations](#limitations)
- [Future Enhancements](#future-enhancements)
- [Conclusion](#conclusion)

## Project Purpose
The primary goals of this project are to:
- Gain expertise in the MERN stack through practical application.
- Implement real-time messaging with **Socket.io**.
- Use **JSON Web Tokens (JWT)** for secure authentication and manage sessions with **cookies**.
- Create a responsive UI with **Tailwind CSS** and **Daisy UI**.

### Target Audience
Talkify is designed for users who need a straightforward, real-time chat solution, and for developers aiming to deepen their understanding of the MERN stack.

## Features
- **User Registration**: Secure account creation with credentials (full name, username, password), with passwords hashed for security.
- **Authentication/Authorization**: Login secured with JWTs stored in cookies.
- **Real-Time Messaging**: Instant messaging powered by **Socket.io**.
- **Online Status**: Displays real-time status of online users.
- **Self-Messaging**: Users can send messages to themselves for notes or reminders.
- **Search Functionality**: Dynamic user search by prefix or full name.
- **Conversation History**: Displays past conversations for reference.
- **Responsive Design**: Clean and adaptable UI built with **Tailwind CSS** and **Daisy UI**.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Redux, React Router
- **Packages**: Mongoose, Axios, bcryptjs, Cookie-parser, Dotenv, Nodemon, Cors, React-hot-toast

## Installation
Follow these steps to run the project locally.

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/talkify.git
    cd talkify
    ```

### Backend Setup
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies and start the server:
    ```bash
    npm install
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend folder:
    ```bash
    cd ../frontend
    ```
2. Install dependencies and start the application:
    ```bash
    npm install
    npm start
    ```

## Folder Structure
- **Models**: MongoDB collection schemas.
- **Controllers**: Business logic and data handling.
- **Routes**: API endpoints for actions like login, registration, and messaging.

## Challenges
- **Search Functionality**: Enhanced from exact match to prefix search for better results.
- **Self-Messaging**: Backend and frontend adjustments were needed to manage self-messaging as a unique case.

## Limitations
- **No Group Chat**: Currently supports only one-on-one messaging.
- **Basic UI**: Could benefit from further UI polish.

## Future Enhancements
- **Group Chat**: Introduce support for group chats.
- **Message Reactions**: Add emoji reactions for messages.
- **File Sharing**: Enable file sharing within chat conversations.
- **Advanced Search**: Add fuzzy matching and additional filters for search.
- **UI/UX Improvements**: Further refinement of design and usability.

## Conclusion
### Reflection
Developing Talkify provided an in-depth understanding of full-stack development with the MERN stack. Solving technical challenges enhanced both knowledge and problem-solving skills.

### Future Plans
Planned enhancements include group chat functionality, integration of user feedback, and ongoing UI refinement to improve user experience.
