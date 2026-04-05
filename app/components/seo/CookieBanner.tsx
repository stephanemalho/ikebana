"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cookieConsentEvents, useCookieConsent } from "./useCookieConsent";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
    const { consent, isReady, setConsent } = useCookieConsent();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isReady && consent === null) {
            setIsOpen(true);
        }
    }, [consent, isReady]);

    useEffect(() => {
        const open = () => setIsOpen(true);
        window.addEventListener(cookieConsentEvents.open, open);
        return () => window.removeEventListener(cookieConsentEvents.open, open);
    }, []);

    if (!isReady) return null;

    if (!isOpen && consent) {
        return (
            <button
                title="Gérer les cookies"
                type="button"
                onClick={() => setIsOpen(true)}
                className="
        fixed bottom-4 left-4 z-50
        flex items-center justify-center
        h-12 w-12
        rounded-full
        border border-[var(--button-soft-border)]
        bg-[var(--button-soft-bg)]/90 backdrop-blur-md
        text-[--secondary-color]
        shadow-[0_14px_28px_rgba(163,78,86,0.16)]
        transition
        hover:bg-white hover:shadow-[0_18px_32px_rgba(163,78,86,0.18)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[--secondary-color]/40
    "
            >
                <Cookie className="h-5 w-5" />
            </button>

        );
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[--secondary-color]/20 bg-transparent/20 backdrop-blur-md md:min-h-[450px]">
            <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-md shadow-md">
                    <div className="space-y-2 text-sm text-[--secondary-color]">
                        <p className="font-semibold">Gestion des cookies</p>
                        <p>
                            Nous utilisons des cookies essentiels au fonctionnement du site, ainsi que des cookies de
                            mesure d'audience (Google Analytics) uniquement si vous les acceptez.
                        </p>
                        <p>
                            En savoir plus :{" "}
                            <Link className="underline" href="/cookies">
                                Politique cookies
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                setConsent("refused");
                                setIsOpen(false);
                            }}
                            className="rounded-sm border border-[var(--button-soft-border)] bg-[var(--button-soft-bg)] px-4 py-2 text-sm font-medium text-[--secondary-color] transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                        >
                            Refuser
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setConsent("accepted");
                                setIsOpen(false);
                            }}
                            className="rounded-sm border border-transparent bg-[linear-gradient(135deg,var(--button-primary-start),var(--button-primary-end))] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(163,78,86,0.22)] transition hover:-translate-y-0.5 hover:opacity-95"
                        >
                            Accepter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
