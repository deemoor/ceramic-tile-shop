import { CartRow } from "./CartRow";

import type { ShoppingCartItem } from "../model/types";

type Props = {
  items: ShoppingCartItem[];
};

export const CartTable = ({ items }: Props) => {
  return (
    <div>
      <table className="w-full">
        <thead className="bg-surface">
          <tr>
            <th scope="col" className="order-cell">
              Tile Collection
            </th>

            <th scope="col" className="order-cell">
              Item
            </th>

            <th scope="col" className="order-cell">
              Quantity <br />
              <span className="lowercase">(sq. ft.)</span>
            </th>

            <th scope="col" className="order-cell min-w-[100px]">
              Unit Price <br /> ($)
            </th>

            <th scope="col" className="order-cell w-[100px]">
              Actions
            </th>
          </tr>
        </thead>

        {!!items.length ? (
          <tbody>
            {items.map((item) => (
              <CartRow item={item} key={item.tile.id} />
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={5} className="order-cell text-center py-6 normal-case">
                Your shopping cart is empty.
              </td>
            </tr>
          </tbody>
        )}

      </table>
    </div>
  );
};