import mongoose from 'mongoose';



import dotenv from 'dotenv';
dotenv.config(); // Load .env file

const connectDB = async () => {
  try {
    //const uri = process.env.MONGO_URI;

    await mongoose.connect(process.env.MONGO_URI , {
          dbName:'sbhcollegehub'
    });
    console.log('✅ MongoDB connected successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
