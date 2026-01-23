import Link from "next/link";

const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info p-4 lg:py-16">
                <h1 className="text-4xl">
                    École d'Ikebana
                    <span className="text-[#b75d71]"> Ohara</span> - Cours et enseignement floral à {" "}
                    <span className="text-[#b75d71]">Paris et dans les Yvelines</span>
                </h1>
                <p>
                    L'École d'Ikebana Ohara - Chapitre Yvelines Paris transmet l'art japonais de l'ikebana selon l'enseignement officiel de l'École Ohara, à travers{" "}
                    <Link
                        href="#nos-sites" className="underline"
                    ><strong>trois lieux d'enseignement à Paris et en Île-de-France.</strong></Link>.
                </p>
                <p>À travers des cours réguliers, des ateliers et des événements culturels, nous accompagnons les débutants comme les pratiquants confirmés dans l'apprentissage de l'ikebana, un art floral vivant, enraciné dans la tradition japonaise et ouvert à la création contemporaine à travers le <Link
                    href="#le-style-ohara" className="underline"
                ><strong>style Ohara.</strong></Link>
                </p>
                <p>Rejoignez-nous pour découvrir la beauté de l'ikebana et développer votre sensibilité artistique au cœur de la tradition japonaise.
                </p>
                <div className="hero-content__buttons">
                    <a href="#cours">
                        <button className="hero-content__cta-button">
                            Découvrir les cours
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Information;
