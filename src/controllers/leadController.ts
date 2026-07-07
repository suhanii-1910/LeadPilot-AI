import type { Request, Response } from "express";

import { extractLead } from "../services/extractor.js";
import { scoreLead } from "../services/scorer.js";
import { saveLeadToSheet } from "../services/sheets.js";
import { saveLeadToSupabase } from "../services/supabase.js";
import { sendHotLeadEmail } from "../services/gmail.js";
import { saveLeadToMongo } from "../services/mongodb.js";

export async function createLead(req: Request, res: Response) {
  try {
    console.log("🔥 createLead called");

    const { message } = req.body;

    const lead = await extractLead(message);

    const score = await scoreLead(lead);

    await saveLeadToSheet(lead, score);

    await saveLeadToSupabase(lead, score);

    console.log("Before Mongo Save");

    await saveLeadToMongo(lead, score);

    console.log("After Mongo Save");

    if (score.category === "HOT") {
      await sendHotLeadEmail(lead, score);
    }

    res.json({
      success: true,
      lead,
      score,
    });
  } 
  catch (error: any) {
    console.error("❌ FULL ERROR:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error?.message,
        stack: error?.stack,
    });
}
}