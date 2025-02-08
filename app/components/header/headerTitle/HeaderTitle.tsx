import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const HeaderTitle = () => {
    return (
        <section className="section-left-red border-b-2 border-[#fff0de]">
            <h1 className="secondary-title">{stringHeader.title}</h1>
            <p className="text-xs font-sans text-background">
                {stringHeader.paragraph}
            </p>
        </section>
    );
};

export default HeaderTitle;
