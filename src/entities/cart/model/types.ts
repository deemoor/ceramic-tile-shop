import { Tile } from "@/entities/tile";

export type CartItem = {
  tileId: Tile["id"];
  quantity: number;
};
