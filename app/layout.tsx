import { ReactNode } from "react";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

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
