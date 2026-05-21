import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["employer", "jobseeker"], required: true },
    avatar: { type: String, default: null },
    resume: { type: String, default: null },
    // for employer
    companyName: { type: String },
    companyDescription: { type: String },
    companyLogo: { type: String },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
