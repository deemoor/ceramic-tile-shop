import { describe, expect, it } from "vitest";
import { isValidIndex } from "./isValidIndex";

describe("isValidIndex", () => {
  const array = ["a", "b", "c"];

  it("returns true for a valid index", () => {
    expect(isValidIndex(0, array)).toBe(true);
    expect(isValidIndex(1, array)).toBe(true);
    expect(isValidIndex(2, array)).toBe(true);
  });

  it("returns false for a negative index", () => {
    expect(isValidIndex(-1, array)).toBe(false);
  });

  it("returns false for an index equal to the array length", () => {
    expect(isValidIndex(3, array)).toBe(false);
  });

  it("returns false for an index greater than the array length", () => {
    expect(isValidIndex(10, array)).toBe(false);
  });

  it("returns false for an undefined index", () => {
    expect(isValidIndex(undefined, array)).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(isValidIndex(0, [])).toBe(false);
  });
});