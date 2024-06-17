import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

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
        className={cn("antialiased bg-zinc-950 text-zinc-200", inter.className)}
      >
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
