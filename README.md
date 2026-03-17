#  Live Blog Backend (Level 3)

##  Overview

This project is a **Full Stack Backend Application** built using **Node.js, Express.js, and MongoDB Atlas**. It demonstrates how real-world applications manage and store data persistently in a cloud database.

Instead of using temporary arrays, this project uses **MongoDB Atlas** to store data permanently.

##  Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman (for API testing)
* 
##  Features

 Create User

 Create Post

 Get All Posts

 Delete Post

 User & Post Relationship

 Populate (Fetch user details with post)

 Top 3 Most Recent Posts

##  Project Structure

```
live-blog-backend/
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   └── postRoutes.js
│
├── server.js
├── package.json
├── .env (not uploaded)

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/live-blog-backend.git
cd live-blog-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the server

```bash
npx nodemon server.js
```

---

##  API Endpoints

###  Create User

POST /posts/user

###  Create Post

POST /posts

###  Get All Posts

GET /posts

###  Delete Post

DELETE /posts/:id

###  Top 3 Posts

GET /posts/top

---

##  Key Concepts Used

* REST API Design
* MongoDB Cloud Database
* Mongoose Schemas & Models
* CRUD Operations
* Relationships using ObjectId
* populate() for joining data
* Sorting & Limiting Data


##  Testing

All APIs are tested using **Postman**.
