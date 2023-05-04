import Activities from "@/components/Activities";
import Dogs from "@/components/Dogs";
import Hero from "@/components/Hero";
import KennelPresentation from "@/components/KennelPresentation";
import StevePresentation from "@/components/StevePresentation";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>L&apos;ecrin de baloo</title>
                <meta
                    name="description"
                    content="Découvrez pour vos vacances aux Coches, les balades en chien de traîneau l'hiver et les balades avec les chiens en été !"
                />
                <meta name="image" content="/images/cani-rando.jpg" />
                <meta property="og:title" content="L'ecrin de baloo" />
                <meta
                    property="og:description"
                    content="Découvrez pour vos vacances aux Coches, les balades en chien de traîneau l'hiver et les balades avec les chiens en été !"
                />
                <meta property="og:image" content="/images/cani-rando.jpg" />
                <meta property="og:locale" content="fr_FR" />
            </Head>
            <Hero />
            <main className="bg-white">
                <Activities />
                <KennelPresentation />
                <StevePresentation />
                <Dogs />
            </main>
        </>
    );
}
