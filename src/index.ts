import { saveLeadToSheet } from "./services/sheets";
import { extractLead } from "./services/extractor";
import { scoreLead } from "./services/scorer";

async function main() {

    const lead = await extractLead(`
Hi,

My name is John Smith.

I need an ecommerce website.

Budget is 50000.

Timeline is 2 weeks.

Email: john@gmail.com

Phone: 9876543210

Company: ABC Pvt Ltd

Urgency: High
`);

    console.log("Extracted Lead:");
    console.log(lead);

    const score = await scoreLead(lead);

    await saveLeadToSheet(lead, score);

    console.log("Lead saved to Google Sheets!");

    console.log("\nLead Score:");
    console.log(score);

}

main();