export interface Lead {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: number;
  timeline: string;
  urgency: string;

  score: number;
  category: "HOT" | "WARM" | "COLD";

  priority: "P1" | "P2" | "P3";

  conversion_probability: number;

  status: string;

  lead_source: string;

  ai_notes: string;
}