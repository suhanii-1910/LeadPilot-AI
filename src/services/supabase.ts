import { supabase } from "../database/supabase.js";

export async function saveLeadToSupabase(lead: any, score: any) {
  const { error } = await supabase
    .from("leads")
    .insert([
      {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        service: lead.service,
        budget: lead.budget,

        score: score.score,
        category: score.category,
        priority: score.priority,
        conversion_probability: Math.round(score.conversion_probability * 100),

        reason: score.reason,
      },
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    throw error;
  }

  console.log("✅ Lead saved to Supabase");
}