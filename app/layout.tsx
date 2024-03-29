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
                {/* <!-- Cloudflare Web Analytics --> */}
                <Script id="cloudflare-web-analytics" defer
                        src='https://static.cloudflareinsights.com/beacon.min.js'
                        data-cf-beacon='{"token": "08c219abad4142a884e911161d2488e5"}'>
                </Script>
                {/* <!-- End Cloudflare Web Analytics --> */}
            </head>
            <body>{children}</body>
        </html>
    )
}