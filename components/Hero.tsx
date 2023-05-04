import clsx from "clsx";
import ExportedImage from "next-image-export-optimizer";

export default function Hero() {
    return (
        <header className="relative -z-10">
            <div className="relative">
                <div
                    className={clsx(
                        "w-screen h-screen md:w-full md:h-auto overflow-hidden relative",
                        "after:fixed after:inset-0 after:w-full after:h-full after:will-change-transform after:bg-cover after:bg-no-repeat after:bg-center",
                        "after:bg-[url('/images/hero-phone-mini.jpg')]",
                        "md:after:bg-[url('/images/hero.jpg')] md:aspect-[1920/761] md:after:bottom-auto md:after:aspect-[1920/761] md:after:h-auto"
                    )}
                ></div>
                <div className="absolute max-sm:pt-4 max-sm:px-8 top-0 left-0 right-0 md:top-8 md:right-12 md:left-auto md:w-80 pb-4 flex gap-1 flex-col items-center text-center text-white shadow-[0_5px_5px_rgba(0,0,0,0.15)] md:shadow-none bg-[rgba(0,0,0,0.15)] md:bg-transparent">
                    <ExportedImage
                        className="w-32"
                        src="/images/logo.png"
                        width={128}
                        height={128}
                        alt="Logo de l'Ecrin de Baloo"
                    />
                    <h1 className="text-2xl font-serif md:text-black">
                        Votre musher pour vos activités d&apos;été et
                        d&apos;hiver
                    </h1>
                </div>
            </div>
        </header>
    );
}
