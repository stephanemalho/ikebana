import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

import CookiePreferencesButton from "../seo/CookiePreferencesButton";
import HeaderTitle from "../header/headerTitle/HeaderTitle";
import Container from "../ui/Container";

const shellClass =
    "rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.98),rgba(242,230,223,0.86))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const linkClass =
    "text-sm text-[--secondary-color]/78 underline decoration-[--secondary-color]/20 underline-offset-4 transition hover:text-black";

const Footer = () => {
    return (
        <footer className="w-full bg-[--primary-color] pb-8 pt-4">
            <Container>
                <div className={shellClass}>
                    <div className="grid gap-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.55fr)] lg:items-stretch">
                        <div className="px-5 py-8 md:px-8 md:py-10 lg:px-10">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="inline-flex rounded-[20px] border border-white/80 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(84,52,40,0.08)]">
                                        <HeaderTitle />
                                    </div>

                                    <div>
                                        <p
                                            className="max-w-none text-2xl font-semibold leading-tight text-[--secondary-color] md:text-[2.2rem]"
                                            style={{ fontFamily: "var(--playfair-display)" }}
                                        >
                                            L&apos;art floral japonais transmis avec exigence, sensibilité et fidélité à l&apos;École Ohara.
                                        </p>
                                        <p className="mt-4 max-w-none text-base leading-8 text-[--secondary-color]/78 md:text-[1.02rem]">
                                            Cours, ateliers et événements culturels autour de l&apos;ikebana à Paris, Courbevoie et Gif-sur-Yvette.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-6 lg:grid-cols-2">
                                    <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(247,237,232,0.95),rgba(244,232,225,0.78))] p-5">
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[--secondary-color]/55">
                                            Navigation utile
                                        </p>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <Link className={linkClass} href="/mentions-legales">
                                                Mentions légales
                                            </Link>
                                            <Link className={linkClass} href="/politique-de-confidentialite">
                                                Confidentialité
                                            </Link>
                                            <Link className={linkClass} href="/cookies">
                                                Cookies
                                            </Link>
                                            <div className={linkClass}>
                                                <CookiePreferencesButton />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(247,237,232,0.95),rgba(244,232,225,0.78))] p-5">
                                        <a
                                            href="https://www.instagram.com/ikebanaparis/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram Ikebana Paris"
                                            className="flex items-center gap-4 text-[--secondary-color] transition hover:opacity-85"
                                        >
                                            <span className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/80 bg-white/85 shadow-[0_10px_24px_rgba(84,52,40,0.08)]">
                                                <Instagram className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            <span>
                                                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[--secondary-color]/55">
                                                    Instagram
                                                </span>
                                                <span
                                                    className="block text-lg font-semibold"
                                                    style={{ fontFamily: "var(--playfair-display)" }}
                                                >
                                                    Suivez-nous sur Instagram
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-[--secondary-color]/10 pt-5">
                                <p className="text-sm text-[--secondary-color]/68">
                                    © {new Date().getFullYear()} Association Ikebana Ohara. Tous droits réservés.
                                </p>
                            </div>
                        </div>

                        <figure className="order-first border-b border-white/60 p-5 md:p-6 lg:order-none lg:border-b-0 lg:border-l">
                            <div className="h-full rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] p-4 shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-[22px] lg:min-h-full">
                                    <Image
                                        src="/assets/Heika-printemps.jpg"
                                        alt="Composition heika au printemps"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1023px) 100vw, 28vw"
                                    />
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
