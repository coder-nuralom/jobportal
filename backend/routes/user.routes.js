import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { updateProfile } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/update-profile", authMiddleware, updateProfile);

export default userRouter;
