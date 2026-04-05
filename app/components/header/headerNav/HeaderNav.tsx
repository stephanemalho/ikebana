import { stringHeader } from '@/app/constant/page/header';
import Link from 'next/link';

const HeaderNav = () => {
    return (
        <nav className="flex flex-row w-full">
            <ul className="header__menu li flex flex-row justify-evenly items-center w-1/2 ml-auto intro-reveal">
                <li className="text-[--secondary-color] hover:text-black hover:underline">
                    <Link href="#about-ikebana">{stringHeader.nav.course}</Link>
                </li>
                <li className="text-[--secondary-color] hover:text-black hover:underline">
                    <Link href="#contact">{stringHeader.nav.contact}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
