import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/utils";

export const metadata: Metadata = {
  title: "SOBI Fantasy Game",
  description: "SOBI Fantasy Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased")}>{children}</body>
    </html>
  );
}
