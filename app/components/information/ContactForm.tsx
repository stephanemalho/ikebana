import Image from "next/image";
import { Clock3, ListChecks, ScanQrCode, ShieldCheck } from "lucide-react";

import Container from "../ui/Container";

const shellClass =
    "rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const cardClass =
    "rounded-[28px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] shadow-[0_18px_44px_rgba(84,52,40,0.08)]";

const panelClass =
    "rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(247,237,232,0.95),rgba(244,232,225,0.78))] p-5";

const badgeClass =
    "inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70";

const highlights = [
    {
        icon: ListChecks,
        title: "Formulaire simple",
        text: "Quelques minutes suffisent pour préciser votre demande et votre niveau."
    },
    {
        icon: ShieldCheck,
        title: "Échange confidentiel",
        text: "Les informations partagées restent strictement réservées à la prise de contact."
    },
    {
        icon: Clock3,
        title: "Réponse personnalisée",
        text: "Ikuko Kato vous répond dans les meilleurs délais, selon votre besoin."
    }
];

export function ContactForm() {
    return (
        <section id="contact" className="w-full bg-[--primary-color] py-14 lg:py-16">
            <Container>
                <div className={shellClass}>
                    <div className="px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
                        <div className="mb-10 max-w-3xl">
                            <span className={`${badgeClass} mb-4`}>Contact</span>
                            <h2
                                className="text-3xl font-bold text-[--secondary-color] md:text-4xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                Formulaire de contact direct avec Ikuko Kato
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                Quelques questions pour mieux comprendre votre demande avant de vous répondre.
                            </p>
                        </div>

                        <div className={`${cardClass} overflow-hidden`}>
                            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:p-10">
                                <div className="text-[--secondary-color]">
                                    <span className={`${badgeClass} mb-4 bg-white/75`}>Premier échange</span>
                                    <h3
                                        className="text-2xl font-semibold leading-tight md:text-[2.1rem]"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        Échangeons ensemble avant de prendre rendez-vous
                                    </h3>
                                    <p className="mt-5 max-w-[42rem] text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                        Ce formulaire permet de prendre un premier contact et de préciser votre besoin.
                                    </p>
                                    <p className="mt-2 text-sm italic text-[--secondary-color]/68">
                                        Réponse personnalisée, sans engagement.
                                    </p>

                                    <div className="mt-8 grid gap-4">
                                        {highlights.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <div key={item.title} className={panelClass}>
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-white/80 bg-white/80 text-[--secondary-color] shadow-[0_10px_24px_rgba(84,52,40,0.08)]">
                                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                                        </div>
                                                        <div>
                                                            <p className="text-base font-semibold text-[--secondary-color]">
                                                                {item.title}
                                                            </p>
                                                            <p className="mt-1 text-sm leading-7 text-[--secondary-color]/76">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between gap-6">
                                    <div className="rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,#f6ebe6_0%,#f0ddd4_100%)] p-6 shadow-[0_18px_44px_rgba(84,52,40,0.08)]">
                                        <div className="mb-4 flex items-center gap-3 text-[--secondary-color]">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/80 bg-white/80 shadow-[0_10px_24px_rgba(84,52,40,0.08)]">
                                                <ScanQrCode className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <h4
                                                className="text-lg font-semibold leading-snug"
                                                style={{ fontFamily: "var(--playfair-display)" }}
                                            >
                                                Scanner depuis un mobile ou ouvrir le formulaire
                                            </h4>
                                        </div>

                                        <figure className="mx-auto max-w-[16rem]">
                                            <div className="rounded-[24px] border border-white/80 bg-white/85 p-4 shadow-[0_18px_38px_rgba(84,52,40,0.08)]">
                                                <div className="relative aspect-square overflow-hidden rounded-[18px]">
                                                    <Image
                                                        src="/assets/qr_code_to_google_contact_form.svg"
                                                        alt="QR code pour accéder au formulaire de contact de l'école d'ikebana"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <figcaption className="pt-4 text-sm leading-7 text-[--secondary-color]/74">
                                                Scannez le QR code pour ouvrir directement le formulaire sur votre téléphone.
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className={`${panelClass} text-center`}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLScZOzJG56HlUbwWEgHSKUgK6oPzi36LwUS4SQHhg_oC8kN-MA/viewform?usp=dialog"
                                            className="hero-content__cta-button inline-flex w-full items-center justify-center"
                                        >
                                            Accéder au formulaire
                                        </a>
                                        <p className="mt-4 text-sm italic text-[--secondary-color]/70">
                                            Vous recevrez un exemplaire par mail après l&apos;envoi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
