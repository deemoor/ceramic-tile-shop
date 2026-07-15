"use client";

import { Plus, Trash2 } from "lucide-react";
import type { ShoppingCartItem } from "../model/types";
import { formatPrice } from "@/shared/lib";
import { useAppDispatch } from "@/store/hooks";
import { addItem, removeItem, setQuantity } from "@/store/slices/cartSlice";
import { Icon } from "@/shared/ui/icon";
import { InputNumber } from "@/shared/ui/input-number";

type Props = {
  item: ShoppingCartItem;
};

export const CartRow = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { tile, quantity } = item;

  const handleIncrement = () => {
    dispatch(
      addItem({
        tileId: tile.id,
        quantity: 1,
      }),
    );
  };

  const handleUpdate = (value: number) => {
    dispatch(
      setQuantity({
        tileId: tile.id,
        quantity: value,
      }),
    );
  }

  const handleRemove = () => {
    dispatch(removeItem(tile.id));
  };
  
  return (
    <tr>
      <td className="order-cell">
        <div className="flex flex-col items-center gap-1">
          <div className="relative size-12">
            <Icon 
              src={tile.image}
              alt={tile.title}
              size={48}
              withBorder
            />
          </div>
          <span className="max-sm:text-sm">{tile.title}</span>
        </div>
      </td>

      <td className="order-cell max-lg:hidden">
        <div className="relative size-16 m-auto">
          <Icon 
            src={tile.image}
            alt={tile.title}
            size={64}
          />
        </div>
      </td>

      <td className="order-cell">
        <div className="flex items-center justify-center">
          <InputNumber
            id={`quantity-${tile.id}`}
            label={`Quantity of ${tile.title}`}
            value={quantity}
            onChange={(value) => handleUpdate(value)}
            onEmpty={handleRemove}
          />
        </div>
      </td>

      <td className="order-cell">
        {formatPrice(tile.price)}
      </td>

      <td className="order-cell">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col items-center gap-0.5">
            <button
              type="button"
              onClick={handleIncrement}
              aria-label={`Add one ${tile.title}`}
              className="button bg-green rounded-sm text-background p-0.5"
            >
              <Plus size={20} />
            </button>
            <p className="text-[12px] max-sm:hidden">Add</p>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <button
              type="button"
              onClick={handleRemove}
              aria-label={`Remove ${tile.title} from cart`}
              className="button text-red"
            >
              <Trash2 size={24} />
            </button>
            <p className="text-[12px] max-sm:hidden">Remove</p>
          </div>
        </div>
      </td>
    </tr>
  );
};