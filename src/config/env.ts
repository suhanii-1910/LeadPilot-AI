import dotenv from "dotenv";

dotenv.config();

export const env = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL || "",
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY || "",
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || "",
    GMAIL_EMAIL: process.env.GMAIL_EMAIL || "",
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || "",
    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY || "",
};