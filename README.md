This is a simple RESTful API built with Node.js and Express to manage tasks.
The API supports CRUD (Create, Read, Update, Delete) operations and uses an in-memory array for data storage.

Features
- Create, read, update, and delete tasks
- Validate incoming requests for required fields
- Handle errors gracefully with HTTP status codes and messages
- API documentation with example requests and responses

Task Endpoint
- Create Task: /api/tasks
    - Request Body: title, description, completed (optional)
    - Response: 201 Created with new task object
- Get All Tasks: /api/tasks
    - Response: 200 OK with array of task objects
- Get Task by ID: /api/tasks/:id
    - Response: 200 OK with task object or 404 Not Found
- Update Task: /api/tasks/:id
    - Request Body: title, description, completed (optional)
    - Response: 200 OK with updated task object or 404 Not Found
- Delete Task: /api/tasks/:id
    - Response: 204 No Content or 404 Not Found
 
Setup and Installation
- Clone the repository or download the zip file.
- Install dependencies: npm install
- Start the server: node app.js

API Documentation
- API documentation is available in the docs folder.
- Example requests and responses are provided for each endpoint.

Future Improvements
- Implement database storage (e.g., SQLite MongoDB)
- Add authentication and authorization
- Enhance validation and error handling

Contact
Your Name
dkarthikeya888@gmail.com
