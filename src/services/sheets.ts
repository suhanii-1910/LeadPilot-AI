import { google } from "googleapis";
import { env } from "../config/env.js";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: env.GOOGLE_CLIENT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
    version: "v4",
    auth,
});

export async function saveLeadToSheet(lead: any, score: any) {
    await sheets.spreadsheets.values.append({
        spreadsheetId: env.GOOGLE_SHEET_ID,
        range: "Leads!A:J",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [
                    lead.name,
                    lead.email,
                    lead.phone,
                    lead.company,
                    lead.service,
                    lead.budget,
                    score.score,
                    score.category,
                    score.priority,
                    score.conversion_probability,
                    score.reason,
                ],
            ],
        },
    });

    console.log("✅ Lead saved to Google Sheets");
}