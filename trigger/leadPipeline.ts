import { task } from "@trigger.dev/sdk/v3";

import { extractLead } from "../src/services/extractor.js";
import { scoreLead } from "../src/services/scorer.js";
import { saveLeadToSheet } from "../src/services/sheets.js";
import { saveLeadToSupabase } from "../src/services/supabase.js";
import { sendHotLeadEmail } from "../src/services/gmail.js";

export const leadPipeline = task({
  id: "lead-pipeline",

  run: async (payload: { message: string }) => {
    console.log("STEP 1 - Extracting lead");

    const lead = await extractLead(payload.message);

    console.log("STEP 2 - Lead extracted");

    const score = await scoreLead(lead);

    console.log("STEP 3 - Lead scored");

    await saveLeadToSheet(lead, score);

    console.log("STEP 4 - Saved to Google Sheets");

    await saveLeadToSupabase(lead, score);

    console.log("STEP 5 - Saved to Supabase");

    if (score.category === "HOT") {
      await sendHotLeadEmail(lead, score);
      console.log("STEP 6 - Email sent");
    }

    return {
      success: true,
      lead,
      score,
    };
  },
});