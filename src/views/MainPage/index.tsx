import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { OrderFormIntro } from "@/widgets/order-form-intro";
import { ShoppingCart } from "@/widgets/shopping-cart"

export function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 m-5">
        <OrderFormIntro />

        <div className="flex mt-6">
          <ShoppingCart />
        </div>
      </main>

      <Footer />
    </div>
  );
}