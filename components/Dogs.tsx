import React from "react";
import Carousel from "./Carousel";
import DogsBackground from "./backgrounds/DogsBackground.svg";

export default function Dogs() {
    const dogs = getDogs();

    return (
        <section className="bg-white">
            <DogsBackground
                id="dogs-bg-svg"
                className="w-full h-auto overflow-hidden aspect-[528,246/152,290] bg-primary"
            />
            <div className="bg-primary relative">
                <article>
                    <h2 className="text-4xl font-serif text-center">
                        La troupe
                    </h2>
                    <Carousel
                        items={dogs}
                        className="p-8 max-w-[60rem] mx-auto"
                    />
                </article>
                <article className="max-w-xl mx-auto pb-12 px-8 text-justify">
                    <h2 className="text-4xl font-serif text-center mb-8">
                        Présentation de la troupe
                    </h2>
                    <p>
                        Encouragé par ma femme me voyant prendre beaucoup de
                        plaisir dans ce domaine, j’ai choisi de changer de vie.
                        J&apos; continué à acquérir de l’expérience auprès de
                        divers mushers et ai continué cet apprentissage en
                        passant le diplôme de conducteur de chiens de traineaux
                        au cfppa de DIE. Un diplôme obtenu en mars 2022.
                    </p>
                    <p className="mt-4">
                        Aujourd’hui nous avons la chance de partager notre vie
                        avec nos 14 chiens nordiques.
                    </p>
                </article>
            </div>
        </section>
    );
}

const getDogs = () => [
    {
        alt: "Photo d'Amy",
        url: "/images/dogs/Amy.jpg",
        label: "Amy",
        catchphrase: "Dit Mimi la Tulipe née le 22 Mai 2022",
    },
    {
        alt: "Photo de Baloo",
        url: "/images/dogs/Baloo.jpg",
        label: "Baloo",
        catchphrase: "Dit Baloulou ou balsaco née le 16 Novembre 2016",
    },
    {
        alt: "Photo de Chanel",
        url: "/images/dogs/Chanel.jpg",
        label: "Chanel",
        catchphrase:
            "Notre rayon de soleil maintenant à la retraire née Le 2 Juillet 2013",
    },
    {
        alt: "Photo de Mars",
        url: "/images/dogs/Mars.jpg",
        label: "Mars",
        catchphrase: "Dit marsu née le 1 aout 2016",
    },
    {
        alt: "Photo de Nala",
        url: "/images/dogs/nala.jpg",
        label: "Nala",
        catchphrase: "Dit castafiore née le 4 avril 2021",
    },
    {
        alt: "Photo de Nallé",
        url: "/images/dogs/nallé.jpg",
        label: "Nallé",
        catchphrase: "Dit Nana née le 4 avril 2020",
    },
    {
        alt: "Photo de Pogo",
        url: "/images/dogs/Pogo.jpg",
        label: "Pogo",
        catchphrase: "Dit Pogisto née le 7 Janvier",
    },
    {
        alt: "Photo de Ryanook",
        url: "/images/dogs/Ryanook.jpg",
        label: "Ryanook",
        catchphrase: "Dit Noukette née le 29 Avril 2020",
    },
    {
        alt: "Photo de Saïan",
        url: "/images/dogs/Saïan.jpg",
        label: "Saïan",
        catchphrase: "Dit saina née le 31 Octobre",
    },
    {
        alt: "Photo de Scipion",
        url: "/images/dogs/Scipion.jpg",
        label: "Scipion",
        catchphrase: "Dit scipiak née le 3 juin 2022",
    },
    {
        alt: "Photo de Taïmyr",
        url: "/images/dogs/Taïmyr.jpg",
        label: "Taïmyr",
        catchphrase: "Dit Mirou Mirou née le 27 mars 2022",
    },
];
