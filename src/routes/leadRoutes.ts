import { Router } from "express";

import { createLead } from "../controllers/leadController.js";
import { validateLead } from "../middleware/validateLead.js";

const router = Router();

router.post("/", validateLead, createLead);

export default router;