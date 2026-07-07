export const extractionPrompt = (message: string) => `
You are LeadPilot AI.

Extract the lead information from the customer inquiry.

Return ONLY valid JSON.

Do not include markdown.

Do not include explanations.

If any field is missing, return an empty string.

Customer Message:

${message}

Return JSON in this exact format:

{
  "name": "",
  "email": "",
  "phone": "",
  "company": "",
  "service": "",
  "budget": 0,
  "timeline": "",
  "urgency": ""
}
`;