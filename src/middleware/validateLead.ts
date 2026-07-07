import type{ Request, Response, NextFunction } from "express";
import { z } from "zod";

const leadSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export function validateLead(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = leadSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
  }

  next();
}