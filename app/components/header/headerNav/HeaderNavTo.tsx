"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderNav from "./HeaderNav";
import SectionBreadcrumb from "../../seo/SectionBreadcrumb";

const HeaderNavTo = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";

    // Cas commun : pas la home
    if (!isHome) {
        return (
            <Link
                href="/"
                className="text-sm font-medium hover:underline"
            >
                ← Retour à la page principale
            </Link>
        );
    }

    return (
        <>
            {/* Mobile */}
            <div className="block lg:hidden">
                <HeaderNav />
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
                <SectionBreadcrumb />
            </div>
        </>
    );
};

export default HeaderNavTo;
