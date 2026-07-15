"use client";

import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import Image from "next/image";
import { useState } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { tilesMap, type Tile } from "@/entities/tile";
import type {
  CellDropData,
  TileDragData,
} from "@/features/tile-drag-and-drop";

import { DesignPalette } from "./DesignPalette";
import { VisualizerGrid } from "./VisualizerGrid";
import { placeTile, removeTile } from "@/store/slices/visualizerSlice";
import { VisualizerCellValue } from "@/shared/types";

export const OrderVisualizer = () => {
  const dispatch = useAppDispatch();
  const [activeTileId, setActiveTileId] = useState<VisualizerCellValue>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 4,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    const dragData = active.data.current as TileDragData;
    if (!dragData) return;

    setActiveTileId(dragData.tileId);
  };

  const handleDragCancel = () => {
    setActiveTileId(null);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveTileId(null);
    
    const dragData = active.data.current as TileDragData;
    if (!dragData) return;

    if (!over) {
      if (dragData.type === "grid-tile") {
        dispatch(removeTile(dragData.sourceIndex));
      }
      return;
    };

    const dropData = over.data.current as CellDropData;
    if (!dropData) return;

    dispatch(
      placeTile({
        tileId: dragData.tileId,
        targetIndex: dropData.index,
        sourceIndex:
          dragData.type === "grid-tile"
            ? dragData.sourceIndex
            : undefined,
      }),
    );
  };

  const activeTile = activeTileId
    ? tilesMap.get(activeTileId)
    : undefined;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
      <section
        className="
          grid grid-cols-[3fr_1fr]
          overflow-hidden rounded-md
          border-2 border-text bg-background
        "
      >
        <div>
          <div className="text-center border-b-2 border-text px-4 py-2">
            <h2 className="text-xl">
              Visualize your order:
            </h2>
            <p className="text-sm text-second">
              Drag and drop tiles here to create patterns.
            </p>
          </div>
       
          <div className="w-full aspect-square">
            <VisualizerGrid />
          </div>
        </div>

        <DesignPalette />
      </section>

      <DragOverlay dropAnimation={null}>
        {activeTile && (
          <div className="relative size-16 border-2 border-black">
            <Image
              src={activeTile.image}
              alt={activeTile.title}
              fill
              draggable={false}
              className="object-cover"
            />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};