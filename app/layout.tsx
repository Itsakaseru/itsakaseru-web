import { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    images: {
      url: "https://itsakaseru.me/static/sakii.png",
      secureUrl: "https://itsakaseru.me/static/sakii.png",
      type: "image/png",
    }
  }
};

export default function RootLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
    <Script
      id="cloudflare-analytics"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon="{ 'token': '08c219abad4142a884e911161d2488e5' }"
    />
    {/* Default Font: Geist Sans */}
    <body className={GeistSans.className}>
    {children}
    </body>
    </html>
  );
}
