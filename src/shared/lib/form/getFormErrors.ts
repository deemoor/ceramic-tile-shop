import { FormErrors } from "@/shared/types";
import type { ZodError } from "zod";

export const getFormErrors = (
  error: ZodError,
): FormErrors => {
  const errors: FormErrors = {};

  for (const issue of error.issues) {
    const field = issue.path.at(-1);

    if (typeof field !== "string" || errors[field]) continue;

    errors[field] = issue.message;
  }

  return errors;
};
