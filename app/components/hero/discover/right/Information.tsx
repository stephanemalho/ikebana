//import Image from "next/image";

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
                    L&apos;école Ohara (小原流, Ohara-ryū) est l&apos;une des grandes écoles d&apos;Ikebana au Japon.
                    Elle a été fondée à la fin du XIXᵉ siècle (vers 1895), durant l&apos;époque Meiji (明治時代), par Unshin Ohara.
                </p><p>
                    Contrairement aux écoles plus anciennes comme Ikenobō, dont la pratique est très codifiée et cérémoniale, l&apos;école Ohara propose une approche naturaliste, expressive et contemporaine.
                    Elle a joué un rôle essentiel dans l&apos;évolution de l&apos;Ikebana en introduisant de nouvelles formes, comme le moribana, inspirées des paysages naturels.
                </p>
                <p>
                    Nous proposons des cours d&apos;ikebana style Ohara en France, adaptés à tous les niveaux, du débutant au confirmé.
                </p>

                <div className="hero-content__buttons">
                    <a href="#cours">
                        <button className="hero-content__cta-button">
                            Découvrir les cours
                        </button>
                    </a>
                </div>
            </div>

            {/* <div className="hero-content__testimonial" data-aos="fade-up">
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
            </div> */}
        </div>
    );
};

export default Information;
