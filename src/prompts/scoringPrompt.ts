import type { Lead } from "../types/lead.types";

export const scoringPrompt = (lead: Partial<Lead>) => `
You are an AI Lead Scoring Engine.

Analyze this lead and assign a score from 0-100.

Scoring Rules:

Budget:
>100000 = 40 points
50000-100000 = 30 points
20000-50000 = 20 points
<20000 = 10 points

Email present = 10 points

Phone present = 10 points

Clear service requirement = 20 points

Urgency:
High = 20 points
Medium = 10 points
Low = 0 points

Return ONLY valid JSON.

Do not use markdown.

Do not use code blocks.

Return ONLY this format:

{
  "score": 0,
  "category": "",
  "conversion_probability": 0,
  "reason": ""
}

Category Rules:

HOT = 80+
WARM = 50-79
COLD = below 50

Lead Data:

Email: ${lead.email}

Phone: ${lead.phone}

Service: ${lead.service}

Budget: ${lead.budget}

Timeline: ${lead.timeline}

Urgency: ${lead.urgency}
`;