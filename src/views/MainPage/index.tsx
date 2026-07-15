import { OrderFormIntro } from "@/widgets/order-form-intro";
import { OrderVisualizer } from "@/widgets/order-visualizer";
import { ShoppingCart } from "@/widgets/shopping-cart"
import { OrderSummary } from "@/widgets/order-summary";

export function MainPage() {
  return (
    <div>
      <OrderFormIntro />

      <div className="
        grid grid-cols-[3fr_3fr_2fr] gap-x-8 gap-y-2 mt-5 items-start
        max-xl:grid-cols-2 max-md:grid-cols-1
      ">
        <h2 className="text-2xl col-span-2 max-xl:col-span-1 max-md:hidden">Shopping cart & design tool</h2>
        <h2 className="text-2xl max-md:hidden">Order summary</h2>
        
        <div className="min-w-0 max-md:hidden">
          <ShoppingCart />
        </div>

        <div className="min-w-0 max-xl:hidden">
          <OrderVisualizer />
        </div>

        <div className="min-w-0">
          <OrderSummary>
            <div className="md:hidden">
              <ShoppingCart />
            </div>
          </OrderSummary>
        </div>
      </div>
    </div>
  );
}