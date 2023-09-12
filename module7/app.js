const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const mongoSanitize = require("express-mongo-sanitize")
const hpp = require("hpp")
const validator = require("validator")

const apiRoutes = require("./src/Routes/api");



const app = express();


//Middlewares 
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors()) 
app.use(helmet())   
app.use(rateLimit({max: 100, windowMs: 15*60*1000 }))
app.use(mongoSanitize())
app.use(hpp())
app.use(validator())


// Set up API routes
app.use("/api", apiRoutes);
// 404 route
app.use((req, res)=>{
    res.status(404).json({message: "Not found"})
})

module.exports = app;
