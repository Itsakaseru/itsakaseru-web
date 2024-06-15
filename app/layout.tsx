import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
