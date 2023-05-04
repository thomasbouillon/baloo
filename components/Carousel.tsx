import { HTMLProps, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ExportedImage from "next-image-export-optimizer";

type Item = {
    url: string;
    alt: string;
    label: string;
    catchphrase: string;
};

type Props = {
    items: Item[];
};

export default function Carousel({
    items,
    ...htmlProps
}: Props & HTMLProps<HTMLDivElement>) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<number>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateRef, setAnimateRef] = useState(-1);

    const calcCurrentIndex = () => {
        if (!carouselRef.current) return;
        setCurrentIndex(
            Math.round(
                ((carouselRef.current?.scrollLeft || 0) /
                    (carouselRef.current?.scrollWidth -
                        carouselRef.current.clientWidth)) *
                    (items.length - 1)
            )
        );
    };

    useEffect(() => {
        // if (typeof window === "undefined" || window.innerWidth > 768) return;
        let current = carouselRef.current;
        const handleScroll = () => {
            if (animateRef !== -1) window.cancelAnimationFrame(animateRef);

            if (window.requestAnimationFrame === undefined) calcCurrentIndex();
            else setAnimateRef(window.requestAnimationFrame(calcCurrentIndex));
        };
        current?.addEventListener("scroll", handleScroll);

        return () => {
            current?.removeEventListener("scroll", handleScroll);
        };
    }, [items]);

    return (
        <div {...htmlProps}>
            <p className="text-center">
                Cliquez sur un chien pour en découvrir plus !
            </p>
            <div
                className="overflow-x-scroll md:!px-4 scroll-snap flex flex-row md:gap-2"
                ref={carouselRef}
            >
                {items.map((item, index) => (
                    <ul
                        key={item.url}
                        className="w-72 basis-72 h-72 shrink-0 relative"
                    >
                        <li
                            className={clsx(
                                "absolute inset-0 w-full h-full transition-transform",
                                index !== currentIndex &&
                                    "scale-80 opacity-60 md:opacity-100 md:scale-100"
                            )}
                            onClick={() =>
                                setSelected(
                                    index === selected ? undefined : index
                                )
                            }
                        >
                            <ExportedImage
                                src={item.url}
                                alt={item.alt}
                                width={300}
                                height={300}
                                draggable={false}
                                className="object-contain absolute inset-0 w-full h-full transition-transform ease-in-out duration-500"
                                style={{
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    ...(selected === index && {
                                        transform: "rotate3d(0,1,0,180deg)",
                                    }),
                                }}
                            />
                            <div
                                className="absolute inset-0  transition-transform ease-in-out duration-500 bg-white py-8 px-4"
                                style={{
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    ...(selected !== index && {
                                        transform: "rotate3d(0,1,0,180deg)",
                                    }),
                                }}
                            >
                                <h3 className="text-xl mb-2 text-center font-serif">
                                    {item.label}
                                </h3>
                                <p>{item.catchphrase}</p>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
            <div className="flex justify-center mt-2 gap-1">
                {items.map((item, index) => (
                    <svg
                        key={item.url}
                        className="inline-block w-2 h-2 md:w-3 md:h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            className={clsx(
                                "fill-current text-dark-700 origin-center transition-transform",
                                index !== currentIndex &&
                                    "text-opacity-25 scale-50"
                            )}
                        />
                    </svg>
                ))}
            </div>
        </div>
    );
}
