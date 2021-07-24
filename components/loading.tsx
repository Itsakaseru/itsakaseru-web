import Head from "next/head";
import Image from "next/image";
import LoadingSymbol from "../public/svg/loading.svg";

export default function Loading()
{
    return (
        <>
            <Head>
                <title>Loading...</title>
                <meta name="author" content="Remueru Itsakaseru"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col justify-center h-screen transition-all">
                <div className="bg-primary rounded-xl px-3 pb-1.5 pt-3 max-w-xs self-center">
                    <Image
                        src={ LoadingSymbol }
                        alt="Loading symbol"
                    />
                </div>
                <div className="mt-8 self-center font-secondary text-primary">
                    Loading content...
                </div>
            </div>
        </>
    );
}