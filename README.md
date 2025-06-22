# 📚 Book Manager API

A simple full-stack CRUD application that allows users to manage a list of books using a custom-built RESTful API with a MongoDB database. The project also includes a basic HTML+CSS frontend for interaction with the API.

---

## 🚀 Project Flow

1. **User opens the frontend page** and fills in the book details (Title, Author, Genre, Year).
2. The **frontend sends API requests** to the backend using Fetch.
3. The **Express backend** handles the request, interacts with MongoDB, and returns the response.
4. The user can **view all books**, **edit**, or **delete** them directly from the UI.
5. All operations are handled through **custom API endpoints** built using Express.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Dev Tools**: Postman / curl for testing, GitHub for version control

---

## ⚙️ How to Run the Project

### ✅ Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) (or local MongoDB)
- Git (to clone the repo)

### 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-manager-api.git
   cd book-manager-api
2. **Install backend dependencies**
    ```bash
    cd server
    npm install
    Configure Environment Variables

3. **Create a .env file in the server directory**
    ```Add your MongoDB URI and PORT:
    .env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    
4. **Start the backend server**
    ``` bash
    node server.js
    
4. **Open the frontend**
Go to frontend/index.html
Open it in your browser directly (double-click or use VSCode Live Server)

## **🖥️ Frontend Usage**
Go to the frontend folder.

Open index.html in your browser.

The page allows you to:

- Add a new book

- View all books

- Edit book details

- Delete a book

All actions interact with the backend through your custom API!

💡 What You’ll Learn from This Project
How to build custom REST APIs from scratch

How to connect Express.js with MongoDB using Mongoose

How to make API calls from the frontend using JavaScript Fetch

Basic UI building with HTML and CSS

API testing using curl and Postman

🧵 Example Social Media Post
🚀 Just built my own CRUD API server with Node.js and MongoDB!
📚 Book Manager lets you create, update, delete, and view books via a custom API.
💻 Bonus: I built a clean frontend in HTML/CSS/JS to interact with it.
#BuildInPublic #WebDev #MongoDB #NodeJS #CRUD #API
