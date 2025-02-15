import React from 'react';

const Information = () => {
    return (
        <div className="hero-content">
            <div className="hero-content-info" data-aos="fade-left">
                <h1>
                    Découvrez L'
                    <span className="text-[--primary-color]">Ikébana</span> dans
                    le style{' '}
                    <span className="text-[--primary-color]">Ohara</span>
                </h1>
                <p>
                    Plongez dans l’art raffiné de l’Ikébana, où chaque fleur
                    raconte une histoire et chaque arrangement exprime
                    l’harmonie entre la nature et l’âme.
                </p>

                <div className="hero-content__buttons">
                    <button className="hero-content__order-button">
                        Découvrir
                    </button>
                </div>
            </div>

            <div className="hero-content__testimonial" data-aos="fade-up">
                <div className="hero-content__customer flex-center">
                    <h4>+24</h4>
                    <p>Ans d'expérience</p>
                </div>

                <div className="hero-content__review">
                    <img
                        src="/assets/user.jpg"
                        alt="user"
                        width={16}
                        height={16}
                        className="rounded-full"
                    />
                    <p>
                        "J'ai redécouvert le style d'ikebana que l'on m'avait
                        appris pendant ma vie au Japon"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Information;
