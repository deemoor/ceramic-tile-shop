import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Tile } from "@/entities/tile";
import { VisualizerCellValue } from "@/shared/types/visualizer";
import { VISUALIZER_CELLS_COUNT } from "@/shared/constants/visualizer";
import { isValidIndex } from "@/shared/lib";

export type VisualizerState = {
  cells: VisualizerCellValue[];
};

const initialState: VisualizerState = {
  cells: Array.from(
    { length: VISUALIZER_CELLS_COUNT },
    () => null,
  ),
};

type PlaceTilePayload = {
  tileId: Tile["id"];
  targetIndex: number;
  sourceIndex?: number;
};

const visualizerSlice = createSlice({
  name: "visualizer",
  initialState,
  reducers: {
    placeTile: (state, action: PayloadAction<PlaceTilePayload>) => {
      const { tileId, targetIndex, sourceIndex } = action.payload;

      const isTargetValid = isValidIndex(targetIndex, state.cells);
      if (!isTargetValid) return;

      if (sourceIndex === targetIndex) return;
    
      if (sourceIndex === undefined) {
        state.cells[targetIndex] = tileId;
        return;
      }
   
      const targetTileId = state.cells[targetIndex];
      state.cells[targetIndex] = tileId;
      state.cells[sourceIndex] = targetTileId;
    },
    removeTile: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (!isValidIndex(index, state.cells)) return;
      
      state.cells[index] = null;
    },
  },
});

export const {
  placeTile,
  removeTile
} = visualizerSlice.actions;

export default visualizerSlice.reducer;