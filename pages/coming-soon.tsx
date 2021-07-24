import Head from "next/head";
import Link from "next/link";

export default function ComingSoon()
{
    return (
        <>
            <Head>
                <title>Coming Soon</title>
                <meta name="author" content="Remueru Itsakaseru"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col justify-center space-y-4 items-center h-screen">
                <h1 className="font-secondary font-extrabold text-4xl">Coming Soon</h1>
                <Link href="/">
                    <a className="font-primary text-primary-light">Back to home</a>
                </Link>
            </div>
        </>
    );
}