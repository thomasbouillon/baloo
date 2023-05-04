import ExportedImage from "next-image-export-optimizer";
import ActivitiesBackground from "./backgrounds/ActivitiesBackground.svg";

export default function Activities() {
    const activities = getActivities();

    return (
        <section className="relative">
            <ActivitiesBackground className="w-full aspect-[367.14813/83.015999] absolute top-0 left-0" />
            <h2 className="text-4xl font-serif text-center z-10 relative pt-20">
                Les activités
            </h2>
            <div className="flex flex-wrap justify-around items-stretch gap-6 max-w-5xl mx-auto my-16 md:mt-32 z-10 relative">
                {activities.map((activity, index) => (
                    <div
                        className="w-60 flex flex-col bg-light rounded-3xl pb-4 overflow-hidden shadow-md"
                        key={activity.name}
                    >
                        <ExportedImage
                            width={240}
                            height={240}
                            src={activity.img}
                            alt={activity.imgAlt}
                            className="w-full object-cover aspect-square"
                        />
                        <h3 className="text-2xl text-center w-full p-4">
                            {activity.name}
                        </h3>
                        <p className="mx-4 mb-4 grow text-sm">
                            {activity.description}
                        </p>
                        {activity.url && (
                            <a
                                href={activity.url}
                                className="text-center underline mx-4"
                            >
                                Réserver
                            </a>
                        )}
                        {!activity.url && (
                            <p className="text-center mx-4 text-sm">
                                Réservation pas disponible
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

const getActivities = () => [
    {
        name: "Cani rando",
        img: "/images/cani-rando.jpg",
        imgAlt: "3 Chiens avec les harnais pour la cani rando",
        description:
            "Bien plus qu’une balade un moment de partage avec le meilleur ami de l’homme",
        url: "https://evolution2.com/la-plagne-montchavin-les-coches/cani-rando-traineau-a-chien-evolution2",
    },
    {
        name: "Chien-traîneau",
        img: "/images/traineau.jpg",
        imgAlt: "7 chiens de Steve qui tirent le traineau",
        description:
            "Une parenthèse polaire guidée par nos chiens du Groenland.",
    },
    {
        name: "Visite de chenil",
        img: "/images/visite.jpg",
        imgAlt: "Un enfant qui fait un calin à Chanel",
        description:
            "Une expérience au plus proche du métier de musher et des chiens",
        url: "https://evolution2.com/la-plagne-montchavin-les-coches/chenil-traineau-chien",
    },
];
