"use client";

import { useAppSelector } from "@/store/hooks";
import { VisualizerCell } from "@/features/tile-drag-and-drop";
import { selectVisualizerCells } from "@/store/selectors/visualizerSelectors";

export const VisualizerGrid = () => {
  const cells = useAppSelector(selectVisualizerCells);

  return (
    <div className="grid grid-cols-7 grid-rows-7 h-full">
      {cells.map((tileId, index) => (
        <VisualizerCell
          key={index}
          index={index}
          tileId={tileId}
        />
      ))}
    </div>
  );
};