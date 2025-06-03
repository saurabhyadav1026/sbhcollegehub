const mongoose = require('mongoose');
//require('dotenv').config(); // Load .env file

const connectDB = async () => {
  try {
    //const uri = process.env.MONGO_URI;
    await mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName:'sbhcollegehub'
    });
    console.log('✅ MongoDB connected successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
