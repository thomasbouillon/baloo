export default function KennelPresentation() {
    return (
        <section className="flex flex-col relative justify-evenly px-6 pb-12 min-h-[min(100vh,35rem)]">
            <picture className="object-cover w-full h-full absolute top-0 left-0 overflow-hidden">
                <source media="(min-width:800px)" srcSet="/images/kennel.jpg" />
                <img
                    className="w-full h-full object-cover object-center"
                    src="/images/kennel-phone.jpg"
                    alt="Image de fond avec un chalet dans la montagne"
                />
            </picture>
            <div className="z-10">
                <h2 className="font-serif text-4xl text-center p-0 mb-12 mt-8 md:mb-8 md:mt-4">
                    Le chenil de l&apos;écrin de Baloo
                </h2>
                <div className="max-w-xl mx-auto">
                    <p>
                        L’Ecrin de Baloo c’est une histoire d’amour pour les
                        chiens nordiques et plus particulièrement pour le chien
                        du Groenland, c’est l’aventure de notre vie et l’envie
                        de pouvoir partager notre passion pour les chiens de
                        travail.
                    </p>
                    <p className="mt-6">
                        Nous avons l’objectif de faire passer le message que le
                        bien-être animal est très important au travers de nos
                        activités.
                    </p>
                    <p className="mt-6">
                        L’écrin de Baloo a choisi de poser ses valises dans la
                        jolie stations village de Montchavin les Coches, une
                        station familiales ou il fait bon vivre.
                    </p>
                </div>
            </div>
        </section>
    );
}
