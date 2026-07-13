import type { Tile } from "@/entities/tile";

export type PaletteDragData = {
  type: "palette-tile";
  tileId: Tile["id"];
};

export type GridDragData = {
  type: "grid-tile";
  tileId: Tile["id"];
  sourceIndex: number;
};

export type TileDragData = PaletteDragData | GridDragData | undefined;

export type CellDropData = {
  type: "visualizer-cell";
  index: number;
} | undefined;