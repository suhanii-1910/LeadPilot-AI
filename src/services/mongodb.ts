import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
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

const Lead =
    mongoose.models.Lead || mongoose.model("Lead", leadSchema);

export async function saveLeadToMongo(lead: any, score: any) {
    console.log("Saving to MongoDB...");

    const savedLead = await Lead.create({
        ...lead,

        score: score.score,
        category: score.category,
        priority: score.priority,
        conversion_probability: score.conversion_probability,
        reason: score.reason,
    });

    console.log("✅ Lead saved to MongoDB");
    console.log(savedLead);
}