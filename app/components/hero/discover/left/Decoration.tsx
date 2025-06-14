import Image from 'next/image';
import React from 'react';

import SakuraPetals from './SakuraPetals';

const Decoration = () => {
    return (
        <div className="hero-image relative">
            <Image
                src="/assets/sakura-hero-section.png"
                alt="sakura branch"
                width={700}
                height={100}
                className=""
                priority
            />
            <SakuraPetals />
            <div className="hero-image__overlay" />
        </div>
    );
};
export default Decoration;
