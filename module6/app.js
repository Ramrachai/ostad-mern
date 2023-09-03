const express = require("express");
const app = express();
const apiRoutes = require("./src/Routes/api");

app.use(express.json());


// Set up API routes
app.use("/api", apiRoutes);

module.exports = app;
