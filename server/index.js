
import express from "express";
import connectdb from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";




const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB connection
connectdb();

app.get('/',(req,res)=>{
  res.setHeader('Content-Type', 'text/html'); 
  res.write("hello bro");
  res.end();
});


try{
  app.listen(2030);
}
catch(err){
console.log("sbhydv crashed");
}