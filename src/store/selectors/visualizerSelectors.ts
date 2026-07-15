import { RootState } from "../index";

export const selectVisualizerCells = (state: RootState) => 
  state.visualizer.cells;