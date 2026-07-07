import { generateContent } from "./gemini";
import { scoringPrompt } from "../prompts/scoringPrompt";
import type { Lead } from "../types/lead.types";

export async function scoreLead(lead: Partial<Lead>) {
  const response = await generateContent(
    scoringPrompt(lead)
  );

  const result = JSON.parse(response);

  if (result.category === "HOT") {
    result.priority = "P1";
  } else if (result.category === "WARM") {
    result.priority = "P2";
  } else {
    result.priority = "P3";
  }

  return result;
}