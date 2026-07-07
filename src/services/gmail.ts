import nodemailer from "nodemailer";
import { env } from "../config/env.js";

console.log("Email:", env.GMAIL_EMAIL);
console.log("Password length:", env.GMAIL_APP_PASSWORD.length);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.GMAIL_EMAIL,
    pass: env.GMAIL_APP_PASSWORD,
  },
});

export async function sendHotLeadEmail(lead: any, score: any) {
  await transporter.sendMail({
    from: env.GMAIL_EMAIL,
    to: env.GMAIL_EMAIL,

    subject: `🔥 HOT Lead Alert - ${lead.name}`,

    html: `
      <h2>🔥 New HOT Lead Received</h2>

      <p><strong>Name:</strong> ${lead.name}</p>

      <p><strong>Email:</strong> ${lead.email}</p>

      <p><strong>Phone:</strong> ${lead.phone}</p>

      <p><strong>Company:</strong> ${lead.company}</p>

      <p><strong>Service:</strong> ${lead.service}</p>

      <p><strong>Budget:</strong> ₹${lead.budget}</p>

      <hr>

      <h3>AI Analysis</h3>

      <p><strong>Score:</strong> ${score.score}</p>

      <p><strong>Category:</strong> ${score.category}</p>

      <p><strong>Priority:</strong> ${score.priority}</p>

      <p><strong>Conversion Probability:</strong> ${score.conversion_probability}</p>

      <p><strong>Reason:</strong> ${score.reason}</p>
    `,
  });

  console.log("✅ Gmail notification sent");
}