import { RootState } from "../index";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) =>
  state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

// export const selectCartItemById = (tileId: string) =>
//   (state: RootState) => state.cart.items.find((item) => item.tileId === tileId);

// export const selectCartQuantity =
//   (tileId: string) =>
//   (state: RootState) =>
//     state.cart.items.find((item) => item.tileId === tileId)
//       ?.quantity ?? 0;