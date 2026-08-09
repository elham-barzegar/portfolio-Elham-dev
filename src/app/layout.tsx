import type { Metadata } from "next";
import {Inter} from "next/font/google";
import React from "react";

import "./globals.css";
const font = Inter({
    weight:['100', '200', '300', '400', '500','600', '700', '800', '900'],
    subsets:['latin'],
})


export const metadata: Metadata = {
  title: "Elham Barzegar | Portfolio",
  description: "Portfolio website for Elham Barzeghar – web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
