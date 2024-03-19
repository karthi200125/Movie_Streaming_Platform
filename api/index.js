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
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/auth', AuthRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
