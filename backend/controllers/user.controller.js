import { User } from "../models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user;
    const { name, avatar, companyName, companyDescription, companyLogo, resume } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Update user fields
    user.name = name || user.name;
    user.avatar = avatar || user.avatar;
    user.resume = resume || user.resume;

    if (user.role === "employer") {
      user.companyLogo = companyLogo || user.companyLogo;
      user.companyName = companyName || user.companyName;
      user.companyDescription = companyDescription || user.companyDescription;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
