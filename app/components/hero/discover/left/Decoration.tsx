import Image from 'next/image';
import React from 'react';

const Decoration = () => {
    return (
        <div className="hero-image">
            <Image
                src="/assets/arbre-sakura-du-japon.png"
                alt="sushi"
                data-aos="fade-up"
                className="absolute top-0 lg:left-[-100px] md:left-3"
                width={700}
                height={800}
            />
            <h2 data-aos="fade-up">
                イ <br />
                ケ <br />
                バ <br />
                ナ <br />
            </h2>

            <div className="hero-image__overlay"></div>
        </div>
    );
};

export default Decoration;
