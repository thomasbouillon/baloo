import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";

const PlayfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <style>
                    {`:root{
      --steve-font-sans: sans;
                --steve-font-serif: ${PlayfairDisplay.style.fontFamily};
}`}
                </style>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
