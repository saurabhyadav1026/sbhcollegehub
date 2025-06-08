

import express from "express";
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config()

const app=express();
app.use(cors( ));
app.use(express.json());
app.use('/api/users',userRoutes);
module.export= app;