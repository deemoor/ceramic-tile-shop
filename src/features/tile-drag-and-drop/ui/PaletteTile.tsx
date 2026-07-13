"use client";

import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";

import type { Tile } from "@/entities/tile";

type Props = {
  tile: Tile;
};

export const PaletteTile = ({ tile }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
  } = useDraggable({
    id: `palette-tile-${tile.id}`,
    data: {
      type: "palette-tile",
      tileId: tile.id,
    },
  });

  return (
    <button
      ref={setNodeRef}
      type="button"
      aria-label={`Drag ${tile.title}`}
      className={`
        relative aspect-square touch-none overflow-hidden
        border border-text rounded-1 transition-opacity
        ${isDragging ? "opacity-40" : "opacity-100"}
      `}
      {...listeners}
      {...attributes}
    >
      <Image
        src={tile.image}
        alt={tile.title}
        fill
        draggable={false}
        className="pointer-events-none object-cover"
      />
    </button>
  );
};