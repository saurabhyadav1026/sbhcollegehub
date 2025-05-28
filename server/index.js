// /server/index.js
const express = require('express');
const connectDB = require('./config/db'); // Import the connection
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
