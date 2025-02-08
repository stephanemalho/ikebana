import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const HeaderTitle = () => {
    return (
        <section className="flex flex-col h-full justify-center items-center basis-2/5 bg-[#B1454A]">
            <h1 className="secondary-title">{stringHeader.title}</h1>
            <p className="text-xs font-sans text-gray-300">
                {stringHeader.paragraph}
            </p>
        </section>
    );
};

export default HeaderTitle;
