import { v2 as cloudinary } from "cloudinary";
const connectCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Connected to Cloudinary successfully");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error);
    throw new Error("Failed to connect to Cloudinary");
  }
};

export default connectCloudinary;
