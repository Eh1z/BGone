import "dotenv/config";
import express from "express";
import cors from "cors";

// App Configurations
const port = process.env.PORT || 8000;
const app = express();

// Middlewares Config
app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => res.send("API is working for now"));

// Start Server
app.listen(port, () =>
	console.log(`Server Running on: http://localhost:${port} `)
);
