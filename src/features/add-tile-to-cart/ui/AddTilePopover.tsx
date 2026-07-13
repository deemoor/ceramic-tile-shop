"use client";

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import clsx, { type ClassValue } from "clsx";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import { tiles } from "@/entities/tile";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

type Props = {
  cartTileIds: string[];
}

export const AddTilePopover = ({ cartTileIds } : Props) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const availableTiles = tiles.filter(
    (tile) => !cartTileIds.includes(tile.id),
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(6),
      flip({
        fallbackPlacements: ["right-start"],
      }),
      shift({
        padding: 8,
      }),
      size({
        padding: 8,
        apply({ availableHeight, elements }) {
          elements.floating.style.maxHeight =
            `${Math.max(120, availableHeight)}px`;
        },
      }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "menu",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const handleAddTile = (tileId: string) => {
    dispatch(
      addItem({
        tileId,
        quantity: 1,
      }),
    );
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={refs.setReference}
        type="button"
        disabled={availableTiles.length === 0}
        aria-label="Add new tile to cart"
        className={cn(
          "button-surface flex items-center gap-2 py-1 px-2 rounded-lg",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
        {...getReferenceProps()}
      >
        <Plus size={24} />
        <div className="relative size-7">
          <Image
            src={availableTiles[0]?.image ?? tiles[0].image}
            alt={availableTiles[0]?.title ?? tiles[0].image}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <span className="heading text-left text-sm leading-4">Add new tile <br /> to cart</span>
      </button>

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={cn(
              "z-50 w-64 overflow-y-auto",
              "border border-black rounded-xl bg-background py-1 shadow-xl",
            )}
            {...getFloatingProps()}
          >
            {availableTiles.map((tile) => (
              <button
                key={tile.id}
                type="button"
                role="menuitem"
                onClick={() => handleAddTile(tile.id)}
                className={cn(
                  "flex w-full items-center gap-3 p-2",
                  "transition-colors hover:bg-surface",
                )}
              >
                <div className="relative border-2 size-10 min-w-[40px] border-black">
                  <Image
                    src={tile.image}
                    alt={tile.image}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="heading truncate text-sm">
                  {tile.title}
                </span>
              </button>
            ))}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};