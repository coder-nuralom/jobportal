import mongoose, { mongo } from "mongoose";

const savedJobSchema = new mongoose.Schema({
  jobseeker: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
});

export const SavedJob = mongoose.models.SavedJob || mongoose.model("SavedJob", savedJobSchema);
