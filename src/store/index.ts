import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
// import orderReducer from "./slices/orderSlice";
// import visualizerReducer from "./slices/visualizerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // order: orderReducer,
    // visualizer: visualizerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;