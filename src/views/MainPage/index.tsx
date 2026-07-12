import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { OrderFormIntro } from "@/widgets/OrderFormIntro";

export function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 m-5">
        <OrderFormIntro />
      </main>

      <Footer />
    </div>
  );
}