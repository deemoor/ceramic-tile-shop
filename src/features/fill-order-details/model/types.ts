import { z } from "zod";
import { orderDetailsSchema } from "./schema";

export type OrderDetails = z.infer<typeof orderDetailsSchema>;

export type OrderDetailsErrors = Partial<
  Record<keyof OrderDetails, string>
>;