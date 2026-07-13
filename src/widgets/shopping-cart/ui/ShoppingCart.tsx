"use client";

import { tilesMap } from "@/entities/tile";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/selectors/cartSelectors";

import { CartSummary } from "./CartSummary";
import { CartTable } from "./CartTable";
import { calculateSummary } from "../model/calculateSummary";
import { AddTilePopover } from "@/features/add-tile-to-cart";

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
  const cartTileIds = cartItems.map(item => item.tileId);

  return (
    <div>
      <CartTable items={items} />
      
      <div className="flex justify-between">
        <div className="mt-2">
          <AddTilePopover cartTileIds={cartTileIds} />
        </div>
        {!!items.length && (
          <CartSummary summary={summary} />
        )}
      </div>
    </div>
  );
};