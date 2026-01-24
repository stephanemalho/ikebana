"use client";
import { useEffect, useState } from 'react'
import { cookieConsentEvents, useCookieConsent } from './useCookieConsent';

const CookieButton = () => {
    const { consent, setConsent } = useCookieConsent();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!consent) {
            setIsOpen(true);
        }
    }, [consent]);

    useEffect(() => {
        const open = () => setIsOpen(true);
        window.addEventListener(cookieConsentEvents.open, open);
        return () => window.removeEventListener(cookieConsentEvents.open, open);
    }, []);

    if (!isOpen && consent) {
        return (
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 left-4 z-50 rounded-full border border-[--secondary-color]/30 bg-white px-4 py-2 text-xs text-[--secondary-color] shadow"
            >
                Gérer les cookies
            </button>
        );
    }

    if (!isOpen) return null;
    return (
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
    )
}

export default CookieButton
