import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import visualizerReducer from "./slices/visualizerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    visualizer: visualizerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;