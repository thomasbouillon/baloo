import Activities from "@/components/Activities";
import Dogs from "@/components/Dogs";
import Hero from "@/components/Hero";
import KennelPresentation from "@/components/KennelPresentation";
import StevePresentation from "@/components/StevePresentation";

export default function Home() {
    return (
        <>
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
