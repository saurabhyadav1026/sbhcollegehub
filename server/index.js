// /server/index.js
const express = require('express');
const cors=require('cors');
//const mongoose =require('mongoose');
const userRoutes=require('./routes/userRoutes');

const dotenv=require('dotenv');
const connectDB = require('./config/db'); // Import the connection
//require('dotenv').config();
dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors({origin:'https://sbhcollegehub.netlify.app'}));
app.use(express.json());
app.use('/api/users',userRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
// Test route
//app.get('/', (req, res) => {
// res.send('API is working');
//});

// Start server
