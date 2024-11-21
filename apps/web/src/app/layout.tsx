import type { Metadata } from "next";
import { Poppins, Rubik, Lato, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { ReactQueryProvider } from "@/providers/react-query-providers";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cart-context";
import { inter, lato, montserrat, poppins, roboto, rubik } from "../fonts/fonts";
import { Footer } from "@/components/footer";
import { NextAuthSessionProvider } from "@/providers/session-provider";
import dynamic from "next/dynamic";

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
          inter.variable,
          roboto.variable,
        )}
      >
        <ReactQueryProvider>
          <NextAuthSessionProvider>
            <CartProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
              >
                <NuqsAdapter>
                  <div className="">
                    <Navbar />
                  </div>
                  <main className="w-full">
                    <div className="flex min-h-screen flex-col justify-between w-full">
                      {children}
                      <Footer />
                    </div>
                  </main>
                </NuqsAdapter>
              </ThemeProvider>
              <Analytics />
              <SpeedInsights />
              <Toaster />
            </CartProvider>
          </NextAuthSessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
