// index.js
const app = require("./app");
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config({path: "./config.env"}) 

const PORT = process.env.PORT || 5500;

mongoose.connect("mongodb://localhost:27017/express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
