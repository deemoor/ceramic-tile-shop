import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("formats an integer price", () => {
    expect(formatPrice(29)).toBe("$29.00");
  });

  it("formats a decimal price", () => {
    expect(formatPrice(29.5)).toBe("$29.50");
  });

  it("rounds to two decimal places", () => {
    expect(formatPrice(29.999)).toBe("$30.00");
  });

  it("formats zero", () => {
    expect(formatPrice(0)).toBe("$0.00");
  });

  it("formats a negative price", () => {
    expect(formatPrice(-5)).toBe("$-5.00");
  });
});