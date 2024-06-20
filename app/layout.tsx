import { ReactNode } from "react";
import type {Metadata} from "next";
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
      {/* Default Font: Geist Sans */}
      <body className={ GeistSans.className }>
      {children}
      </body>
    </html>
  );
}
