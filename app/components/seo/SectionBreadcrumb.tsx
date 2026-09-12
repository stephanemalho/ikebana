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
    MapPin,
    Menu,
    Sparkles,
    X,
    type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { sectionLinks } from "@/app/constant/seo/sections";

const sectionIcons: Record<string, LucideIcon> = {
    top: Home,
    "cours-ikebana-paris": MapPin,
    "ecole-ohara": GraduationCap,
    ikebana: Flower2,
    "le-style-ohara": BookOpen,
    "creations-ikebana": GalleryVerticalEnd,
    "inspirations-ikebana": Sparkles,
    cours: CalendarDays,
    contact: Mail,
    faq: CircleHelp,
};

export default function SectionBreadcrumb() {
    const [isOpen, setIsOpen] = useState(false);
    const [previewedSection, setPreviewedSection] = useState<string | null>(null);

    const previewSection = (sectionId: string) => {
        setPreviewedSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

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
                    className="absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-2rem))] border border-[--secondary-color]/15 bg-[#fffdfa] p-2 shadow-[0_16px_36px_rgba(84,52,40,0.14)]"
                >
                    <ol className="grid">
                        {sectionLinks.map((section) => (
                            <li key={section.id}>
                                {(() => {
                                    const Icon = sectionIcons[section.id];

                                    return (
                                        <Link
                                            className={`flex items-center gap-3 px-3 py-2 text-sm font-normal transition duration-200 ${
                                                previewedSection === section.id
                                                    ? "translate-x-1 bg-[--secondary-color] text-white"
                                                    : "text-[--secondary-color]/82 hover:translate-x-1 hover:bg-[--secondary-color] hover:text-white"
                                            }`}
                                            href={`#${section.id}`}
                                            onMouseEnter={() => previewSection(section.id)}
                                            onFocus={() => setPreviewedSection(section.id)}
                                            onMouseLeave={() => setPreviewedSection(null)}
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
