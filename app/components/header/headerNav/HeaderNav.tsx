import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const HeaderNav = () => {
    return (
        <nav className="flex flex-row w-full">
            <ul data-aos="fade-down" className="header__menu li flex flex-row justify-evenly items-center w-1/2 ml-auto ">
                <li className="text-[--secondary-color] hover:text-black hover:underline">
                    <a href="#about-ikebana">{stringHeader.nav.course}</a>
                </li>
                <li className="text-[--secondary-color] hover:text-black hover:underline">
                    <a href="#contact">{stringHeader.nav.contact}</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
