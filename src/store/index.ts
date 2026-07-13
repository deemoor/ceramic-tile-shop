import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import visualizerReducer from "./slices/visualizerSlice";
// import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    visualizer: visualizerReducer,
    // order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;