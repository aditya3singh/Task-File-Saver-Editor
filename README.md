# Task-File-Saver-Editor
    The Task-File-Saver-Editor is an Express.js project for file management, allowing users to list, view, create, and edit files, streamlining file operations efficiently via a user-friendly interface.


Task File Manager

Overview-

    The Task File Manager is a backend application built with Node.js and Express.js that allows users to create, view, and manage tasks. Each task is stored as a file on the server, enabling users to maintain       persistent task storage. The app provides a simple and intuitive interface using EJS for dynamic rendering and Tailwind CSS for styling.

Features-

    Create Tasks: Add tasks with a title and description. Tasks are saved as .txt files in the files directory.
    View Tasks: See a list of all saved tasks on the homepage.
    Read Task Details: Click on any task to view its details on a separate page.
    Persistent Storage: Tasks are stored as individual files on the server, ensuring persistence.

Technologies Used-

    Node.js: Backend runtime environment.
    Express.js: Framework for handling routes and middleware.
    EJS: Template engine for dynamic HTML rendering.
    Tailwind CSS: Utility-first CSS framework for styling.
    File System (fs): Node.js module for file handling operations.

Installation

Clone the repository:

    git clone https://github.com/your-username/Task-File-Saver-Editor.git
Navigate to the project directory:
    
    cd task-file-manager

Install dependencies:

    npm install

Usage

Start the server:

    node index.js
Open your browser and navigate to:
    
    http://localhost:3000
    
Directory Structure

project-directory/

    |-- files/                # Directory to store task files
    |-- public/               # Static assets (CSS, JS, etc.)
    |-- views/                # EJS templates
    |   |-- index.ejs         # Homepage template
    |   |-- show.ejs          # Task details template
    |-- index.js              # Main application file
    |-- package.json          # Node.js package metadata

Endpoints

License

This project is licensed under the MIT License.

Feel free to contribute by submitting issues or pull requests!
