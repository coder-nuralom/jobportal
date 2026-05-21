import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./config/connectDB.js";

const app = express();

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Job Portal API. Everything is working fine.",
    success: true,
  });
});

const PORT = process.env.PORT || 8000;

await connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
