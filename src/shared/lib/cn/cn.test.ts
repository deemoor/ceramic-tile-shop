import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("ignores falsy values", () => {
    expect(
      cn("button", false, null, undefined, "", "active"),
    ).toBe("button active");
  });

  it("includes conditional class names", () => {
    const isActive = true;
    const isDisabled = false;

    expect(
      cn(
        "button",
        isActive && "button-active",
        isDisabled && "button-disabled",
      ),
    ).toBe("button button-active");
  });

  it("supports object syntax", () => {
    expect(
      cn({
        button: true,
        active: true,
        disabled: false,
      }),
    ).toBe("button active");
  });

  it("supports arrays of class names", () => {
    expect(
      cn(["button", "rounded"], ["px-4", "py-2"]),
    ).toBe("button rounded px-4 py-2");
  });

  it("resolves conflicting Tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("keeps non-conflicting Tailwind classes", () => {
    expect(cn("px-4", "py-2", "text-center")).toBe(
      "px-4 py-2 text-center",
    );
  });

  it("resolves conflicting classes passed conditionally", () => {
    const isLarge = true;

    expect(
      cn("text-sm", isLarge && "text-lg"),
    ).toBe("text-lg");
  });

  it("returns an empty string when no arguments are provided", () => {
    expect(cn()).toBe("");
  });
});