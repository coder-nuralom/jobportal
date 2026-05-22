import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import upload from "../middleware/multer.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", upload.single("avatar"), register);
authRouter.post("/login", login);

export default authRouter;
