"use client";

import { openCookiePreferences } from "./useCookieConsent";

export default function CookiePreferencesButton() {
    return (
        <button
            type="button"
            onClick={openCookiePreferences}
            className="text-sm text-[--secondary-color] underline hover:text-black"
        >
            Gérer les cookies
        </button>
    );
}
