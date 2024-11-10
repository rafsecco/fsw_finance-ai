import { isMatch } from "date-fns";
import { z } from "zod";

export const generateAIReportSchema = z.object({
  // month: z.string().regex(/^\d{2}$/),
  month: z.string().refine((value) => !isMatch(value, "MM")),
});

export type generateAIReportSchema = z.infer<typeof generateAIReportSchema>;
