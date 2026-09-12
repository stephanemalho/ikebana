"use client";

import Link from "next/link";
import {
    BookOpen,
    CalendarDays,
    CircleHelp,
    Flower2,
    GalleryVerticalEnd,
    GraduationCap,
    Home,
    Mail,
    Menu,
    Sparkles,
    X,
    type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { sectionLinks } from "@/app/constant/seo/sections";

const sectionIcons: Record<string, LucideIcon> = {
    top: Home,
    "ecole-ohara": GraduationCap,
    "nos-activites": CalendarDays,
    ikebana: Flower2,
    "le-style-ohara": BookOpen,
    "creations-ikebana": GalleryVerticalEnd,
    "inspirations-ikebana": Sparkles,
    cours: GraduationCap,
    contact: Mail,
    faq: CircleHelp,
};

export default function SectionBreadcrumb() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative" aria-label="Navigation des sections">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="section-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex items-center gap-2 border border-[--secondary-color]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[--secondary-color] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary-color]"
            >
                {isOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
                Navigation
            </button>

            {isOpen && (
                <div
                    id="section-navigation"
                    className="absolute right-0 top-full z-50 mt-2 w-72 border border-[--secondary-color]/15 bg-[#fffdfa] p-2 shadow-[0_16px_36px_rgba(84,52,40,0.14)]"
                >
                    <ol className="grid">
                        {sectionLinks.map((section) => (
                            <li key={section.id}>
                                {(() => {
                                    const Icon = sectionIcons[section.id];

                                    return (
                                        <Link
                                            className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-[--secondary-color]/82 transition hover:bg-[--primary-color]/35 hover:text-[--secondary-color]"
                                            href={`#${section.id}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Icon aria-hidden="true" size={17} strokeWidth={1.6} />
                                            {section.label}
                                        </Link>
                                    );
                                })()}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </nav>
    );
}
