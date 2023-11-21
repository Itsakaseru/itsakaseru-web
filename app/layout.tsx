import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
    weight: [ "400", "600", "700" ],
    variable: "--font-poppins",
    subsets: ["latin"],
    preload: false
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    preload: false
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${poppins.variable} ${inter.variable}`}>
            <head>
               <meta name="author" content="Lemuel Lancaster" />
                <meta name="theme-color" content="#524C46" />
                <meta name="msapplication-navbutton-color" content="#524C46" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#524C46" />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-VP2Z22PN09"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-VP2Z22PN09');
                    `}
                </Script>
            </head>
            <body>{children}</body>
        </html>
    )
}