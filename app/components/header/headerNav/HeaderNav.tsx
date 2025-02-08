import { stringHeader } from '@/app/constant/page/header';
import React from 'react';

const HeaderNav = () => {
    return (
        <nav className="flex flex-row w-full basis-3/5">
            <ul className="flex flex-row justify-evenly items-center w-1/2 ml-auto">
                <li>
                    <a href="#discover">{stringHeader.nav.discover}</a>
                </li>
                <li>
                    <a href="#course">{stringHeader.nav.course}</a>
                </li>
                <li>
                    <a href="#contact">{stringHeader.nav.contact}</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
