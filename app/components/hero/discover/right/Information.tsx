import Link from "next/link";

const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info p-4 lg:p-16" data-aos="fade-left">
                <h1 className="text-4xl lg:text-8xl">
                    École
                    <span className="text-[#b75d71]"> Ohara</span> chapitre{" "}
                    <span className="text-[#b75d71]">Yvelines Paris</span>
                </h1>
                <p>
                    L'École Ohara - Chapitre Yvelines Paris transmet l'art japonais de l'ikebana selon l'enseignement officiel de l'École Ohara sur <Link 
                        href="#nos-sites" className="underline"
                    ><strong>trois sites à Paris et en Iles-de-france</strong></Link>.
                    À travers des cours réguliers, des ateliers et des événements culturels, nous accompagnons débutants et pratiquants avancés dans l'apprentissage d'un art floral vivant, enraciné dans la tradition japonaise et ouvert sur la création contemporaine.
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
