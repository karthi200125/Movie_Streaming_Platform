import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import MovieRoutes from './Routes/MovieRoutes.js';
import AuthRoutes from './Routes/UserRoute.js';
import { NextError } from './Utils/NextError.js';
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Mongodb connection
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/movie', MovieRoutes);

app.use(NextError)

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
