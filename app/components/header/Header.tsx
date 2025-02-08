import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const Header = () => {
    return (
        <header className="h-[90px] w-full flex flex-row">
            <section className="flex flex-col h-full justify-center items-center basis-2/5 bg-[#B1454A]">
                <h1 className="secondary-title">{stringHeader.title}</h1>
                <p className="text-xs font-sans text-gray-300">{stringHeader.paragraph}</p>
            </section>
            <nav className="flex flex-row w-full basis-3/5">
                <ul className="flex flex-row justify-evenly items-center w-1/2 ml-auto">
                    <li>{stringHeader.nav.discover}</li>
                    <li>{stringHeader.nav.course}</li>
                    <li>{stringHeader.nav.contact}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
