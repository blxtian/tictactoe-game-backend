import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import gameRoutes from './src/routes/gameRoutes'; 

dotenv.config(); // Correctly call dotenv.config()

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies

// Use routes
app.use('/api/games', gameRoutes); // Set up routing

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB(); // Call the connectDB function

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
