import Image from "next/image";
import { Plus, PlusCircle, Trash2 } from "lucide-react";

import type { ShoppingCartItem } from "../model/types";
import { formatPrice } from "@/shared/lib";
import { useAppDispatch } from "@/store/hooks";
import { addItem, removeItem, setQuantity } from "@/store/slices/cartSlice";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  item: ShoppingCartItem;
};

export const CartRow = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { tile, quantity } = item;

  const [inputValue, setInputValue] = useState(String(quantity));

  useEffect(() => {
    setInputValue(String(quantity));
  }, [quantity]);

  const handleIncrement = (tileId: string) => {
    dispatch(
      addItem({
        tileId,
        quantity: 1,
      }),
    );
  };

  const handleRemove = (tileId: string) => {
    dispatch(removeItem(tileId));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputValue(value);
  };
  
  const applyValue = () => {
    if (inputValue === '' || inputValue === '0') {
      dispatch(removeItem(tile.id))
    }

    const value = Math.max(1, Number(inputValue) || 1);
   
    if (value !== quantity) {
      dispatch(
        setQuantity({
          tileId: tile.id,
          quantity: value,
        }),
      );
    }

    setInputValue(String(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return (
    <tr>
      <td className="order-cell">
        <div className="flex flex-col items-center gap-1">
          <div className="relative size-12 border-2 border-black rounded-sm">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <span className="max-sm:text-sm">{tile.title}</span>
        </div>
      </td>

      <td className="order-cell max-lg:hidden">
        <div className="relative size-16">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </td>

      <td className="order-cell">
        <div className="flex items-center justify-center">
          <span>[</span>
          <label htmlFor={`quantity-${tile.id}`} className="sr-only">
            Quantity of {tile.title}
          </label>

          <input
            id={`quantity-${tile.id}`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputValue}
            onChange={handleChange}
            onBlur={applyValue}
            onKeyDown={handleKeyDown}
            className="h-7 w-12 bg-transparent text-center outline-none"
          />
          <span>]</span>
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
              onClick={() => handleIncrement(tile.id)}
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
              onClick={() => handleRemove(tile.id)}
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