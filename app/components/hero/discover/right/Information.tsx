import Link from "next/link";

const places = ["Paris", "Courbevoie", "Gif-sur-Yvette"];

const Information = () => {
    return (
        <div className="flex h-full items-center px-4 pb-2 pt-6 lg:px-6 lg:py-12">
            <div className="w-full max-w-3xl rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.97),rgba(244,233,227,0.82))] p-6 shadow-[0_24px_70px_rgba(84,52,40,0.08)] md:p-8 lg:p-10">
                <span className="inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70">
                    Chapitre Yvelines Paris
                </span>

                <h1
                    className="mt-5 max-w-[14ch] text-4xl font-bold leading-[1.05] text-[--secondary-color] md:text-5xl lg:text-[3.8rem]"
                    style={{ fontFamily: "var(--playfair-display)" }}
                >
                    Ikebana école <span className="text-[#E7463C]">Ohara</span>
                    <span className="mt-2 block text-[0.58em] font-medium uppercase tracking-[0.08em] text-[#E7463C] md:text-sm">
                        Cours et enseignement de l&apos;ikebana, art floral japonais
                    </span>
                </h1>

                <p className="mt-6 max-w-[48rem] text-lg leading-8 text-[--secondary-color]/84 md:text-[1.15rem]">
                    L&apos;École d&apos;Ikebana Ohara - Chapitre Yvelines Paris transmet l&apos;art japonais de l&apos;ikebana selon l&apos;enseignement officiel de l&apos;École Ohara, à travers{" "}
                    <Link href="#cours" className="underline decoration-[--secondary-color]/25 underline-offset-4">
                        <strong>trois lieux d&apos;enseignement à Paris et en Île-de-France.</strong>
                    </Link>
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {places.map((place) => (
                        <span
                            key={place}
                            className="rounded-sm border border-[--secondary-color]/12 bg-white/65 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[--secondary-color]/62"
                        >
                            {place}
                        </span>
                    ))}
                </div>

                <div className="mt-8 grid gap-4 text-[--secondary-color]/82">
                    <p className="max-w-[50rem] text-base leading-8 md:text-[1.03rem]">
                        À travers des cours réguliers, des ateliers et des événements culturels, nous accompagnons les débutants comme les pratiquants confirmés dans l&apos;apprentissage de l&apos;ikebana, un art floral vivant, enraciné dans la tradition japonaise et ouvert à la création contemporaine à travers le{" "}
                        <Link href="#le-style-ohara" className="underline decoration-[--secondary-color]/25 underline-offset-4">
                            <strong>style Ohara.</strong>
                        </Link>
                    </p>
                    <p className="max-w-[46rem] text-base leading-8 md:text-[1.03rem]">
                        Rejoignez-nous pour découvrir la beauté de l&apos;ikebana et développer votre sensibilité artistique au cœur de la tradition japonaise.
                    </p>
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Link href="#cours" className="hero-content__cta-button inline-flex items-center justify-center">
                        Découvrir les cours
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-semibold uppercase tracking-[0.16em] text-[--secondary-color]/68 underline decoration-[--secondary-color]/22 underline-offset-4 transition hover:text-black"
                    >
                        Me contacter
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Information;
