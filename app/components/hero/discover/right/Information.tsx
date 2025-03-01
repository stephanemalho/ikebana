const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info" data-aos="fade-left">
                <h1>
                    L'
                    <span className="text-[--primary-color]">Ikebana</span> dans
                    le style traditionel{' '}
                    <span className="text-[--primary-color]">Ohara</span>
                </h1>
                <p>
                    Plongez dans l’art raffiné de l’Ikebana, où chaque fleur
                    raconte une histoire et chaque arrangement exprime
                    l’harmonie entre la nature et l’âme.
                </p>

                <div className="hero-content__buttons">
                    <button className="hero-content__order-button">
                        Découvrir les cours
                    </button>
                </div>
            </div>

            <div className="hero-content__testimonial" data-aos="fade-up">
                <div className="hero-content__experience flex-center">
                    <h4>+24</h4>
                    <p>Ans d'expérience</p>
                </div>

                <div className="hero-content__customer">
                    <img
                        src="/assets/user.jpg"
                        alt="user testimonial"
                        className="rounded-full"
                    />
                    <p>
                        "Grâce à Kato Sensei, j'ai redécouvert le style d'ikebana que l'on m'avait
                        appris pendant ma vie au Japon"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Information;
