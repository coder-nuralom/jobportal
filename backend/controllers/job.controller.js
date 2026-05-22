import { Job } from "../models/job.model";

export const createJob = async (req, res) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(403).json({
        success: false,
        message: "Only employers can create jobs",
      });
    }

    const job = await Job.create({ ...req.body, company: req.user._id });
    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create job",
    });
  }
};
