import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const HeaderTitle = () => {
    return (
        <div className="header__logo flex flex-col align-center z-1">
            <h4>{stringHeader.title}</h4>
            <div data-aos="fade-down" className="text-[--tercary-color]">
                {stringHeader.paragraph}
            </div>
        </div>
    );
};

export default HeaderTitle;
