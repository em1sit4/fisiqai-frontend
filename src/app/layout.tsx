import "./styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PathnameInfoProvider } from "@/context/pathname-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FisiQAI",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PathnameInfoProvider>
      <html lang="es">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </PathnameInfoProvider>
  );
}
