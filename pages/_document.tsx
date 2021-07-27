import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render()
    {
        return (
            <Html>
                <Head>
                    <meta name="author" content="Lemuel Lancaster" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="theme-color" content="#524C46" />
                    <meta name="msapplication-navbutton-color" content="#F9F9F9" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#F9F9F9" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument