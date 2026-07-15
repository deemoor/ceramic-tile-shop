import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import "./globals.css";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const oswald = Oswald({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["500"],
});

const inter = Inter({
  variable: "--font-second",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Artisan Kiln",
  description: "Ceramic tile order form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="text-main bg-background text-text min-h-full">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 mt-6 mb-10 px-6 max-sm:px-3">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
