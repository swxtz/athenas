import type { Metadata } from "next";
import { Poppins, Rubik, Lato, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "@/lib/utils";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { ReactQueryProvider } from "@/providers/react-query-providers";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cart-context";
import { inter, lato, montserrat, poppins, rubik } from "./fonts/fonts";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "RN Distribuidora",
  description: "Ecommerce da RN Distribuidora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "antialiased ",
          poppins.className,
          lato.variable,
          rubik.variable,
          montserrat.variable,
          inter.variable
        )}
      >
        <ReactQueryProvider>
          <CartProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <div className="">
                <Navbar />
              </div>
              <main className="">
                <div className="flex min-h-screen flex-col justify-between">
                  {children}
                  <Footer />
                </div>
              </main>
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
