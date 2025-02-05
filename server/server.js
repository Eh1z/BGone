import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/connectDB.js";

// Routes Imports
import userRouter from "./routes/userRoutes.js";

// App Configurations
const port = process.env.PORT || 8000;
const app = express();
await connectDB();

// Middlewares Config
app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => res.send("API is working for now"));
app.use("/api/user/", userRouter);

// Start Server
app.listen(port, () =>
	console.log(`Server Running on: http://localhost:${port} `)
);
