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
                className="fixed h-12 w-12 bottom-4 left-4 z-50 rounded-full border border-[--secondary-color]/30 bg-white text-xs text-[--secondary-color] shadow"
            >
                <Cookie className="inline-block mr-1 h-8 w-8" />
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
                            className="rounded border border-[--secondary-color]/30 px-4 py-2 text-sm text-[--secondary-color] hover:text-black"
                        >
                            Refuser
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setConsent("accepted");
                                setIsOpen(false);
                            }}
                            className="rounded bg-[--secondary-color] px-4 py-2 text-sm text-white hover:opacity-90"
                        >
                            Accepter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
