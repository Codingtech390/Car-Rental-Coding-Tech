import express from "express";
import "dotenv/config";
import cors from "cors";

// Initialize the express app
const app = express();

// Middleware to parse JSON bodies and handle JSON requests
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
