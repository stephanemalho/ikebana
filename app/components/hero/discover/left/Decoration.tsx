import Image from 'next/image';
import React from 'react';

const Decoration = () => {
    return (
        <div className="hero-image">
            <Image
                src="/assets/cherry.png"
                alt="sushi"
                data-aos="fade-up"
                className="md:left-3"
                width={700}
                height={800}
            />
            <h2 lang="ja" data-aos="fade-up" className="hero-content__japanese-title">
                い <br />
                け <br />
                ば <br />
                な <br />
            </h2>

            <div className="hero-image__overlay"></div>
        </div>
    );
};

export default Decoration;
