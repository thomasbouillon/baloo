import ExportedImage from "next-image-export-optimizer";

export default function StevePresentation() {
    return (
        <section className="px-8 pb-4 md:grid md:grid-cols-[20rem,auto] md:place-content-center md:gap-12">
            <ExportedImage
                src="/images/steve.jpg"
                alt="Portrait de Steve"
                width={360}
                height={360}
                className="w-80 max-w-full -translate-y-6 shadow-md mx-auto"
            />
            <div className="max-w-lg mx-auto pt-8">
                <h2 className="font-serif text-4xl">Steve</h2>
                <p className="my-4">
                    Je m’appelle Steve je suis musher. Passionné par les chiens
                    nordiques j’ai eu la chance d’adopter Baloo, mon premier
                    husky de Sibérie il y a maintenant 6 ans. C&apos;est avec
                    lui que je pratique de nombreuses activités sportives depuis
                    le début.
                </p>
                <p>
                    Début 2019 j’ai eu la chance de rencontrer un musher à la
                    suite d’un baptême en chien de traineau, nous avons pu
                    échanger sur ce métier que je trouvais magnifique, nous
                    avons gardé contact. J’ai pu quelques mois plus tard
                    travailler 7 semaines avec lui afin de découvrir le monde du
                    chien de traineaux.
                </p>
            </div>
        </section>
    );
}
