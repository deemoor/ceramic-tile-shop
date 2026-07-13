"use client";

import { tilesMap } from "@/entities/tile";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/selectors/cartSelectors";

import { CartSummary } from "./CartSummary";
import { CartTable } from "./CartTable";
import { calculateSummary } from "../model/calculateSummary";

export const ShoppingCart = () => {
  const cartItems = useAppSelector(selectCartItems);

  const items = cartItems.flatMap((cartItem) => {
    const tile = tilesMap.get(cartItem.tileId);
    if (!tile) return [];
    
    return [
      {
        tile,
        quantity: cartItem.quantity,
      },
    ];
  });

  const summary = calculateSummary(items);

  return (
    <div>
      <CartTable items={items} />
      {!!items.length && (
        <CartSummary summary={summary} />
      )}
    </div>
  );
};