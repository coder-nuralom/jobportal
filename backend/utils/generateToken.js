import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const generateAccessToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
