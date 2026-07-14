import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { OrderFormIntro } from "@/widgets/order-form-intro";
import { OrderVisualizer } from "@/widgets/order-visualizer";
import { ShoppingCart } from "@/widgets/shopping-cart"
import { OrderSummary } from "@/widgets/order-summary";

export function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 mt-5 px-6">
        <OrderFormIntro />

        <div className="grid grid-cols-3 gap-x-8 gap-y-2 mt-5 items-start">
          <h2 className="heading text-2xl col-span-2">Shopping cart & design tool</h2>
          <h2 className="heading text-2xl">Order summary</h2>
          
          <div className="min-w-0">
            <ShoppingCart />
          </div>

          <div className="min-w-0">
            <OrderVisualizer />
          </div>

          <div className="min-w-0">
            <OrderSummary  />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}