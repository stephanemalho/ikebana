const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info" data-aos="fade-left">
                <h1>
                    L&apos;
                    <span className="text-[#b75d71]">Ikebana</span> dans
                    le style traditionel{" "}
                    <span className="text-[#b75d71]">Ohara</span>
                </h1>
                <p>
                    Plongez dans l&apos;art raffiné de l&apos;Ikebana, où chaque fleur
                    raconte une histoire et chaque arrangement exprime
                    l&apos;harmonie entre la nature et l&apos;âme.
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
                    <img
                        src="/assets/user.jpg"
                        alt="user testimonial"
                        className="rounded-full"
                    />
                    <p>
                        "Grâce à Kato Sensei, j&apos;ai redécouvert le style
                        d&apos;ikebana que l&apos;on m&apos;avait appris pendant ma vie au
                        Japon"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Information;
