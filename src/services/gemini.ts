import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env";
import { AI_MODELS } from "../constants/models";

const client = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

export async function generateContent(prompt: string): Promise<string> {
  try {
    const response = await client.models.generateContent({
      model: AI_MODELS.GEMINI,
      contents: prompt,
    });

    return response.text ?? "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}