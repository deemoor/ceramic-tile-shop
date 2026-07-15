"use client";

import Image from "next/image";
import {
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { tilesMap } from "@/entities/tile";
import { VisualizerCellValue } from "@/shared/types";
import { cn } from "@/shared/lib/cn";

type Props = {
  index: number;
  tileId: VisualizerCellValue;
};

export const VisualizerCell = ({ index, tileId }: Props) => {
  const tile = tileId ? tilesMap.get(tileId) : undefined;

  const {
    attributes,
    listeners,
    setNodeRef: setDraggableRef,
    isDragging,
  } = useDraggable({
    id: `grid-tile-${index}`,
    disabled: !tile,
    data: tile && {
      type: "grid-tile",
      tileId: tile.id,
      sourceIndex: index,
    },
  });

  const {
    isOver,
    setNodeRef: setDroppableRef,
  } = useDroppable({
    id: `visualizer-cell-${index}`,
    data: {
      type: "visualizer-cell",
      index,
    },
  });

  const setNodeRef = (node: HTMLButtonElement | null) => {
    setDroppableRef(node);
    setDraggableRef(node);
  };

  return (
    <button
      ref={setNodeRef}
      type="button"
      aria-label={`Cell ${index + 1}`}
      className={cn(
        "relative touch-none border border-black",
        "outline-none transition-colors",
        isOver ? "bg-surface" : "",
        isDragging ? "opacity-30" : "opacity-100"
      )}
      {...attributes}
      {...listeners}
    >
      {tile && (
        <Image
          src={tile.image}
          alt={tile.title}
          width={64}
          height={64}
          draggable={false}
          className="pointer-events-none object-cover"
        />
      )}
    </button>
  );
};