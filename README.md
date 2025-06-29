
# 📚 Book Management System – Full Stack CRUD App

A complete full-stack **Book Manager** application that allows users to perform **Create, Read, Update, and Delete (CRUD)** operations on books using a custom-built RESTful API. Built with Node.js, Express, and MongoDB, it includes a clean HTML/CSS/JS frontend and comprehensive testing using Jest and Supertest.

---

## 🚀 Project Flow

1. Users interact with the **frontend form** (add/view/edit/delete books).
2. The frontend makes API calls to the **Express backend**.
3. Backend performs CRUD operations using **MongoDB (via Mongoose)**.
4. Manual testing of unit, API, Integration
5. Responses are rendered in the UI and verified using **automated tests**.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Testing**:
  - Unit Tests: Jest
  - API Tests: Supertest
  - Integration Tests: MongoDB Memory Server
  - AI-based API Testing: Keploy
- **Tools**: Curl, Git, GitHub, , Keploy Chrome Extension

---

## ⚙️ How to Run the Project Locally

### ✅ Prerequisites

- Node.js & npm
- MongoDB Atlas (or local MongoDB)
- Git installed

### 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/monasri001/book-management-system-CRUD-.git
   cd book-management-system-CRUD-
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the `server/` folder and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   node server.js
   ```

5. **Open the frontend**

   - Go to the `frontend/` folder
   - Open `index.html` in your browser (or use VSCode Live Server)

---

## 🧪 Running Tests

### ▶️ Run all tests with coverage:
```bash
npm test
```

### 🔬 Test Types Implemented

| Test Type       | Tool Used           | Description                                  |
|------------------|---------------------|----------------------------------------------|
| Unit Test        | Jest                | Book model unit test                         |
| API Test         | Jest + Supertest    | CRUD operations via real endpoints           |
| Integration Test | MongoMemoryServer   | In-memory MongoDB testing without affecting real DB |

### 🧾 Test Coverage Achieved

- ✅ Total coverage: ~83%
- ✅ 100% coverage for Book model
- ✅ All major routes tested

> 📸 **Test Result Screenshot:**
![Test Output](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/testing%20output.png)

---

## 🖼️ Frontend Output

![Frontend UI](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/frontend%20output.png)

---
## Keploy API Testing & CI/CD Integration
- API Testing with AI and CI/CD was integrated into this project.

  **steps**
  -  Generated **OpenAPI Schema** using Swagger UI
  -  Used **Keploy Test Recorder Chrome Extension** to capture API calls
  - Generated **test cases** and **test suite natively**
  - Integrated Keploy into **CI/CD pipeline using GitHub Actions**
  - Verified **successful execution** of pipeline stages

  ### 📸 Screenshots:

| OpenAPI Schema | Native Test Suite | Test Results |
|----------------|-------------------|--------------|
| ![OpenAPI Schema](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/openapi%20schema.png) | ![Test Suite](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/test%20suite%20native.png) | ![Test Result](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/test.png) |

> 🛠️ GitHub Actions CI/CD pipeline has been configured under `.github/workflows/ci.yml`.
| github action status |
|----------------------|
| ![actions ci/cd](https://github.com/monasri001/book-management-system-CRUD-/blob/main/assets/action%20status.png)|

---

## 💻 Features

- Add new books
- View all books
- Edit book information
- Delete any book
- Real-time updates in frontend
- API tested using Jest + Supertest
- Keploy AI-based testing and CI/CD integration

---

## 💡 What You'll Learn

- Building custom REST APIs from scratch
- Connecting Express.js with MongoDB using Mongoose
- Handling frontend-backend communication using Fetch API
- Structuring tests for unit, API, and integration levels
- Calculating test coverage using Jest
- Recording real API calls and generating test suites via Keploy
- Setting up GitHub Actions for CI/CD with Keploy integration

---

## 🔗 Repository Link

📂 GitHub Repo: [monasri001/book-management-system-CRUD-](https://github.com/monasri001/book-management-system-CRUD-)

---

## 🧵 Sample Social Post

> 🚀 Just built a complete Book Management CRUD App using Node.js + MongoDB!  
> ✅ REST API + Frontend + Testing with Jest & Supertest  
> 💡 Learned how to test APIs and improve backend reliability!  
> #OpenSource #CRUD #NodeJS #MongoDB #BuildInPublic #API

---

## 🙌 Thanks for Checking It Out!

Have suggestions or want to contribute? Fork the repo and create a pull request!
