import { stringHeader } from '@/app/constant/page/header';
import Image from 'next/image';
import React from 'react';

const HeaderTitle = () => {
    return (
        <div className="flex flex-row w-auto p-2 gap-2">
            <Image src="/images/logo-ohara-removebg.png" width={50} height={20} alt="logo-ikebana" className="flex-1"/>
            <div className=" flex flex-col align-center z-1">
                <h4>{stringHeader.title}</h4>
                <div data-aos="fade-down" className="text-[--title-color ]">
                    {stringHeader.paragraph}
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;
