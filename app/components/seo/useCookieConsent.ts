"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ikebana_cookie_consent";
const CONSENT_EVENT = "ikebana-consent-change";
const CONSENT_OPEN_EVENT = "ikebana-consent-open";

export type CookieConsentValue = "accepted" | "refused" | null;

export function getCookieConsent(): CookieConsentValue {
    if (typeof window === "undefined") return null;
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "refused") return stored;
    return null;
}

export function setCookieConsent(value: Exclude<CookieConsentValue, null>) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, value);
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${CONSENT_KEY}=${value}; max-age=${maxAge}; path=/; samesite=lax`;
    window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openCookiePreferences() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function useCookieConsent() {
    const [consent, setConsentState] = useState<CookieConsentValue>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setConsentState(getCookieConsent());
        setIsReady(true);

        const onChange = () => setConsentState(getCookieConsent());
        const onStorage = (event: StorageEvent) => {
            if (event.key === CONSENT_KEY) {
                setConsentState(getCookieConsent());
            }
        };

        window.addEventListener(CONSENT_EVENT, onChange);
        window.addEventListener("storage", onStorage);
        return () => {
            window.removeEventListener(CONSENT_EVENT, onChange);
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    return {
        consent,
        isReady,
        setConsent: setCookieConsent
    };
}

export const cookieConsentEvents = {
    change: CONSENT_EVENT,
    open: CONSENT_OPEN_EVENT
} as const;
