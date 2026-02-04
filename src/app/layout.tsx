import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils";
import Providers from "@/components/providers";
import Header from "@/components/layout/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOBI Fantasy Game",
  description: "SOBI Fantasy Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={cn("antialiased font-sans bg-black")}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
