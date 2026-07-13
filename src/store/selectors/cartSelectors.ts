import { RootState } from "../index";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) =>
  state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;
