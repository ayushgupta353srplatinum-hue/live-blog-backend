require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/posts", postRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server Running on Port " + process.env.PORT);
});