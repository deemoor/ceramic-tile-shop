import { FREE_DELIVERY_MIN_SUM, SHIPPING_PRICE } from "./constants";
import { CartSummaryData, ShoppingCartItem } from "./types";

export const calculateSummary = (items: ShoppingCartItem[]): CartSummaryData => {
  const subtotal = items.reduce((total, item) => {
    return total + item.tile.price * item.quantity;
  }, 0);

  const shipping = subtotal > FREE_DELIVERY_MIN_SUM ? 0 : SHIPPING_PRICE;
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total,
  };
};