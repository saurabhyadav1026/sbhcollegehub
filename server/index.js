
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import mangoose from "mongoose";




const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

dotenv.config();
// MongoDB connection
 try{
  const uri=process.env.MONGO_URI
  console.log(uri);
  mangoose.connect(uri,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
     dbName:'sbhcollegehub'
   });
console.log("db connected by sbh");
}
catch{
  console.log("Error sbh connecting to MongoDB");
}
app.get('/',(req,res)=>{
  res.setHeader('Content-Type', 'text/html'); 
  res.write("hello bro");
  res.end();
});


try{
  app.listen(2030);
}
catch(err){
console.log("sbhydv sbhyd  crashed");
}