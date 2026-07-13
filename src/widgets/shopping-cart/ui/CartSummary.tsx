import { formatPrice } from "@/shared/lib";
import type { CartSummaryData } from "../model/types";

type Props = {
  summary: CartSummaryData;
};

export const CartSummary = ({ summary }: Props) => {
  const { subtotal, shipping, total } = summary;

  return (
    <div className="flex justify-end w-full">
      <dl className="grid grid-cols-[auto_minmax(101px,auto)] items-stretch heading">
        <dt className="p-1 text-right">Subtotal:</dt>
        <dd className="order-cell py-1 border-t-0">
          {formatPrice(subtotal)}
        </dd>
        <dt className="p-1 text-right">Shipping:</dt>
        <dd className="order-cell py-1 border-t-0">
          {formatPrice(shipping)}
        </dd>
  
        <dt className="p-1 text-right">Grand Total:</dt>
        <dd className="order-cell py-1 border-t-0">
          {formatPrice(total)}
        </dd>
      </dl>
    </div>
  );
};