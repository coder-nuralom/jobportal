import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/generateToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    const existsUser = await User.findOne({ email });

    if (existsUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let avatarData = {
      url: null,
      public_id: null,
    };

    if (req.file) {
      try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: "jobportal/avatars",
        });

        avatarData = {
          url: uploadResult.secure_url,
          public_id: uploadResult.public_id,
        };
      } catch (uploadError) {
        console.error("Cloudinary upload failed:", uploadError.message);
      } finally {
        if (req.file?.path) {
          try {
            await fs.promises.unlink(req.file.path);
          } catch (err) {
            console.error("File delete failed:", err.message);
          }
        }
      }
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar: avatarData,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in userRegister:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while registering user",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = await generateAccessToken(user._id);

    await User.findByIdAndUpdate(user._id, { lastLoginDate: new Date() });

    res.cookie("accessToken", accessToken, {
      httpOnly: true, // prevent javascript to access cookie
      secure: process.env.NODE_ENV === "production", // false, to get cookie in http and https.
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        resume: user.resume,
        companyName: user.companyName,
        companyDescription: user.companyDescription,
        companyLogo: user.companyLogo,
      },
    });
  } catch (error) {
    console.error("Error in userLogin:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while logging in user",
    });
  }
};
