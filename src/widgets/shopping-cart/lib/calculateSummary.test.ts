import { describe, expect, it } from "vitest";
import { calculateSummary } from "./calculateSummary";
import { FREE_DELIVERY_MIN_SUM, SHIPPING_PRICE } from "../model/constants";
import type { ShoppingCartItem } from "../model/types";

describe("calculateSummary", () => {
  it("returns zero summary for an empty cart", () => {
    expect(calculateSummary([])).toEqual({
      subtotal: 0,
      shipping: SHIPPING_PRICE,
      total: SHIPPING_PRICE,
    });
  });

  it("calculates subtotal, shipping, and total", () => {
    const items: ShoppingCartItem[] = [
      {
        tile: { id: "1", title: "Tile 1", image: "", price: 20 },
        quantity: 2,
      },
      {
        tile: { id: "2", title: "Tile 2", image: "", price: 15 },
        quantity: 3,
      },
    ];

    expect(calculateSummary(items)).toEqual({
      subtotal: 85,
      shipping: SHIPPING_PRICE,
      total: 85 + SHIPPING_PRICE,
    });
  });

  it("applies free shipping when subtotal is greater than the free delivery threshold", () => {
    const items: ShoppingCartItem[] = [
      {
        tile: {
          id: "1",
          title: "Tile",
          image: "",
          price: FREE_DELIVERY_MIN_SUM + 1,
        },
        quantity: 1,
      },
    ];

    expect(calculateSummary(items)).toEqual({
      subtotal: FREE_DELIVERY_MIN_SUM + 1,
      shipping: 0,
      total: FREE_DELIVERY_MIN_SUM + 1,
    });
  });

  it("charges shipping when subtotal equals the free delivery threshold", () => {
    const items: ShoppingCartItem[] = [
      {
        tile: {
          id: "1",
          title: "Tile",
          image: "",
          price: FREE_DELIVERY_MIN_SUM,
        },
        quantity: 1,
      },
    ];

    expect(calculateSummary(items)).toEqual({
      subtotal: FREE_DELIVERY_MIN_SUM,
      shipping: SHIPPING_PRICE,
      total: FREE_DELIVERY_MIN_SUM + SHIPPING_PRICE,
    });
  });
});