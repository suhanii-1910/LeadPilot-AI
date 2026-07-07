import { saveLeadToSheet } from "../services/sheets.js";
import { task } from "@trigger.dev/sdk/v3";

import { extractLead } from "../services/extractor.js";
import { scoreLead } from "../services/scorer.js";

export const leadPipeline = task({
    id: "lead-pipeline",

    run: async (payload: { message: string }) => {

        console.log("🔥 NEW VERSION IS RUNNING");
        const lead = await extractLead(payload.message);

        console.log("Lead Extracted");

        const score = await scoreLead(lead);
        await saveLeadToSheet(lead, score);
        console.log("Saved to Google Sheets");

        console.log("Score Generated");

        return {
            success: true,
            lead,
            score,
        };

    },
});