#  Prompts.md – Problem Solving Log

##  Problem 1: MongoDB Atlas Connection Error

###  Issue:

While connecting MongoDB Atlas, I faced this error:

Error: querySrv ECONNREFUSED

###  Cause:

* DNS seedlist (mongodb+srv) was not supported in my system/network
* Incorrect connection string format

###  Solution:

* Disabled SRV connection string
* Used standard connection string (mongodb:// instead of mongodb+srv://)
* Ensured correct username, password, and database name in .env file

---

##  Problem 2: IP Address Whitelisting

###  Issue:

Connection was failing due to security restrictions.

###  Cause:

MongoDB Atlas requires IP address to be allowed.

###  Solution:

* Added my current IP address in Network Access
* Also tested using 0.0.0.0/0 (allow from anywhere)

---

##  Problem 3: Environment Variables Not Working

###  Issue:

MongoDB URI was not loading properly.

###  Cause:

* dotenv not configured correctly
* .env file formatting issue

###  Solution:

* Installed dotenv package
* Added require('dotenv').config() at the top of server.js
* Verified correct .env format

---

##  Problem 4: "router is not defined"

###  Issue:

Server crashed with error:

ReferenceError: router is not defined

###  Cause:

Forgot to initialize express router

###  Solution:

Added:

const express = require("express")\nconst router = express.Router()

---

##  Problem 5: Duplicate Express Declaration

###  Issue:

SyntaxError: Identifier 'express' has already been declared

###  Cause:

Declared express multiple times in the same file

###  Solution:

Removed duplicate line and kept only one declaration

---

##  Problem 6: Duplicate Email Error

###  Issue:

E11000 duplicate key error (email already exists)

###  Cause:

MongoDB unique constraint prevented duplicate entries

###  Solution:

* Used different email for testing
* Added error handling in code for duplicate entries

---

##  Problem 7: Delete API Confusion

###  Issue:

After deleting a post, it still appeared in GET request

###  Cause:

Multiple posts with same content but different _id existed

###  Solution:

* Understood that MongoDB deletes based on _id
* Deleted each post individually
* Verified using GET request

---

##  Problem 8: Multiple Auto Restarts in Nodemon

###  Issue:

Nodemon kept restarting repeatedly

###  Cause:

File changes were being detected continuously

###  Solution:

* Ignored unnecessary files
* Ensured stable file saving

---

##  Key Learnings

* How to connect MongoDB Atlas with Express
* Importance of environment variables
* How to debug backend errors
* Understanding of CRUD operations
* Working with relationships using populate()
* Real-world debugging mindset



This project helped me understand real backend development challenges and how to solve them effectively.
I gained hands-on experience with MongoDB, Express, and debugging real-world issues.

---

🔥 *End of Prompts.md*
