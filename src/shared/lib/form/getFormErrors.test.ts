import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { getFormErrors } from "./getFormErrors";

describe("getFormErrors", () => {
  it("returns a single field error", () => {
    const error = new ZodError([
      {
        code: "custom",
        path: ["email"],
        message: "Email is required",
      },
    ]);

    expect(getFormErrors(error)).toEqual({
      email: "Email is required",
    });
  });

  it("returns errors for multiple fields", () => {
    const error = new ZodError([
      {
        code: "custom",
        path: ["email"],
        message: "Email is required",
      },
      {
        code: "custom",
        path: ["password"],
        message: "Password is required",
      },
    ]);

    expect(getFormErrors(error)).toEqual({
      email: "Email is required",
      password: "Password is required",
    });
  });

  it("keeps only the first error for the same field", () => {
    const error = new ZodError([
      {
        code: "custom",
        path: ["email"],
        message: "Email is required",
      },
      {
        code: "custom",
        path: ["email"],
        message: "Email is invalid",
      },
    ]);

    expect(getFormErrors(error)).toEqual({
      email: "Email is required",
    });
  });

  it("ignores issues whose last path segment is not a string", () => {
    const error = new ZodError([
      {
        code: "custom",
        path: ["items", 0],
        message: "Invalid item",
      },
    ]);

    expect(getFormErrors(error)).toEqual({});
  });

  it("returns an empty object when there are no issues", () => {
    const error = new ZodError([]);

    expect(getFormErrors(error)).toEqual({});
  });
});