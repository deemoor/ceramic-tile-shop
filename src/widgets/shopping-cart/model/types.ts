import type { Tile } from "@/entities/tile";

export type ShoppingCartItem = {
  tile: Tile;
  quantity: number;
};

export type CartSummaryData = {
  subtotal: number;
  shipping: number;
  total: number;
};