const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config({path: "./config.env"}) 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

// Check database connection status
db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
  process.exit(1); 
});
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Middleware for JWT authentication
  const authVerify = require('./src/Middleware/authVerify');
  app.use(authVerify);
  
  // Routes
  const studentsRoutes = require('./src/Routes/studentsRoutes');
  const worksRoutes = require('./src/Routes/worksRoutes');
  const otpRoutes = require('./src/Routes/otpRoutes');


  app.use('/students', studentsRoutes);
  app.use('/works', worksRoutes);
  app.use('/otp', otpRoutes);


  // Error Handling Middleware
  const errorHandler = require('./src/Middleware/error-handler');
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
