import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "@/entities/cart";
import { initialCart } from "../mocks/cart";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: initialCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { tileId, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => item.tileId === tileId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ tileId, quantity });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.tileId !== action.payload
      );
    },

    setQuantity: (state, action: PayloadAction<CartItem>) => {
      const { tileId, quantity } = action.payload;

      const item = state.items.find(
        (item) => item.tileId === tileId
      );

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.tileId !== tileId
        );

        return;
      }

      item.quantity = action.payload.quantity;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  setQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;