const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const apiRoutes = require("./src/Routes/api");


const app = express();


//Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()) 

// Set up API routes
app.use("/api", apiRoutes);
// 404 route
app.use((req, res)=>{
    res.status(404).json({message: "Not found"})
})

module.exports = app;
