import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    employer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    totalJobPosted: { type: Number, default: 0 },
    totalApplicationreceived: { type: Number, default: 0 },
    totalHired: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Analytics =
  mongoose.models.Analytics || mongoose.model("Analytics", analyticsSchema);
