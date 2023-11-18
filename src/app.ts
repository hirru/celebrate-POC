// app.ts
import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './dbConnection';
import userRoutes from './routes/userRoutes';

config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB using the function from dbConnection.ts
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
