import { z } from "zod";
import { orderDetailsSchema } from "./schema";

export type OrderDetails = z.infer<typeof orderDetailsSchema>;
export type PaymentMethod = OrderDetails["payment"]["method"];
