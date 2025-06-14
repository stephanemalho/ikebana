import Image from "next/image";

const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info" data-aos="fade-left">
                <h1>
                    École
                    <span className="text-[#b75d71]"> Ohara</span> chapitre{" "}
                    <span className="text-[#b75d71]">Yvelines Paris</span>
                </h1>
                <p>
                    L’école Ohara (小原流, Ohara-ryū) est l’une des principales écoles d’Ikebana au Japon, fondée à la fin du XIXe siècle (vers 1895) par Unshin Ohara.
                </p><p>
                    Contrairement aux styles plus anciens et très codifiés (comme Ikenobō), l'école Ohara est moderne, naturaliste et expressive. Elle a révolutionné l'ikebana en introduisant une approche plus libre et inspirée de la nature.
                </p>

                <div className="hero-content__buttons">
                    <a href="#cours">
                        <button className="hero-content__order-button">
                            Découvrir les cours
                        </button>
                    </a>
                </div>
            </div>

            <div className="hero-content__testimonial" data-aos="fade-up">
                <div className="hero-content__experience flex-center">
                    <h4>+24</h4>
                    <p>Ans d&apos;expérience</p>
                </div>

                <div className="hero-content__customer">
                    <Image
                        src="/assets/user.jpg"
                        alt="user testimonial"
                        className="rounded-full"
                        width={42}
                        height={42}
                    />
                    <p>
                        &quot;Grâce à Kato Sensei, j&apos;ai redécouvert le style
                        d&apos;ikebana que l&apos;on m&apos;avait appris pendant ma vie au
                        Japon&quot;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Information;
