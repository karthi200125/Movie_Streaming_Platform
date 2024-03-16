import express from 'express';
import cors from 'cors';
import AuthRoutes from './Routes/UserRoute.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

// Mongodb connection
mongoose.connect('mongodb+srv://skarthikeyan25052001:BifiKOeIhQOGFY2x@cluster0.wecsqqw.mongodb.net/myDatabase?retryWrites=true&w=majority')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/auth', AuthRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
