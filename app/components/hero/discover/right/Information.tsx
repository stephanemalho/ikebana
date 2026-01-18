const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info p-4 lg:p-16" data-aos="fade-left">
                <h1 className="text-4xl lg:text-8xl">
                    Ecole
                    <span className="text-[#b75d71]"> Ohara</span> chapitre{" "}
                    <span className="text-[#b75d71]">Yvelines Paris</span>
                </h1>
                <p>
                    Nous proposons des <strong>cours d&apos;ikebana style Ohara en France</strong>, adaptes a tous les niveaux, du
                    debutant au confirme.
                </p>

                <div className="hero-content__buttons">
                    <a href="/cours-ikebana">
                        <button className="hero-content__cta-button">Decouvrir les cours</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Information;
