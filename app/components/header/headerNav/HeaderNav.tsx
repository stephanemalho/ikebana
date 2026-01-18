import { stringHeader } from '@/app/constant/page/header';
import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
    const navItems = [
        { href: '/ecole-ikebana-ohara', label: stringHeader.nav.school },
        { href: '/cours-ikebana', label: stringHeader.nav.courses },
        { href: '/galerie-ikebana', label: stringHeader.nav.gallery },
        { href: '/faq-ikebana', label: stringHeader.nav.faq },
        { href: '/contact', label: stringHeader.nav.contact }
    ];

    return (
        <nav className="flex flex-row w-full">
            <ul data-aos="fade-down" className="header__menu li flex flex-row items-center gap-6 ml-auto">
                {navItems.map((item) => (
                    <li key={item.href} className="text-[--secondary-color] hover:text-black hover:underline">
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;
