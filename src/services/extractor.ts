import { generateContent } from "./gemini";
import { extractionPrompt } from "../prompts/extractionPrompt";
import type { Lead } from "../types/lead.types";

export async function extractLead(message: string): Promise<Lead> {
  const response = await generateContent(
    extractionPrompt(message)
  );

    return JSON.parse(response);
}