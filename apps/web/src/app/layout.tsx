import type { Metadata } from "next";
import { Poppins, Rubik, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { ReactQueryProvider } from "@/providers/react-query-providers";
import { Toaster } from "@/components/ui/toaster";

// fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const rubik = Rubik({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
});
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
          montserrat.variable
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="">
              <Navbar />
            </div>
            <main>{children}</main>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
