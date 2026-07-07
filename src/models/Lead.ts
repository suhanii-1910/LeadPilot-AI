import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: String,
    company: String,
    email: String,
    phone: String,
    service: String,
    budget: Number,
    timeline: String,
    urgency: String,

    score: Number,
    category: String,
    priority: String,
    conversion_probability: Number,
    reason: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lead", LeadSchema);