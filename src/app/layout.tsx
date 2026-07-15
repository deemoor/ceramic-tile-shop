import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import "./globals.css";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
