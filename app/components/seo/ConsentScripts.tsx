"use client";

import { useEffect } from "react";
import { useCookieConsent } from "./useCookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_SCRIPT_ID = "ga4-script";
const GA_INLINE_ID = "ga4-inline";
const isDev = process.env.NODE_ENV !== "production";

export default function ConsentScripts() {
    const { consent, isReady } = useCookieConsent();

    useEffect(() => {
        if (isDev) {
            // eslint-disable-next-line no-console
            console.log("[ConsentScripts] mount/update", {
                isReady,
                consent,
                GA_MEASUREMENT_ID
            });
        }

        if (!isReady) return;

        const removeGa = () => {
            document.getElementById(GA_SCRIPT_ID)?.remove();
            document.getElementById(GA_INLINE_ID)?.remove();
            // cleanup globals
            // @ts-expect-error cleanup
            window.gtag = undefined;
            // @ts-expect-error cleanup
            window.dataLayer = undefined;
        };

        const addGa = () => {
            if (!GA_MEASUREMENT_ID) {
                if (isDev) {
                    // eslint-disable-next-line no-console
                    console.warn("[ConsentScripts] GA measurement ID missing");
                }
                return;
            }

            if (!document.getElementById(GA_SCRIPT_ID)) {
                const script = document.createElement("script");
                script.id = GA_SCRIPT_ID;
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
                document.head.appendChild(script);
            }

            if (!document.getElementById(GA_INLINE_ID)) {
                const inline = document.createElement("script");
                inline.id = GA_INLINE_ID;
                inline.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
                `;
                document.head.appendChild(inline);
            }
        };

        if (consent === "accepted") {
            if (isDev) {
                // eslint-disable-next-line no-console
                console.log("[ConsentScripts] consent accepted → inject GA");
            }
            addGa();
        } else {
            if (isDev) {
                // eslint-disable-next-line no-console
                console.log("[ConsentScripts] consent refused/unknown → remove GA");
            }
            removeGa();
        }

        return () => {
            // sécurité en cas de unmount
            if (isDev) {
                // eslint-disable-next-line no-console
                console.log("[ConsentScripts] cleanup → remove GA");
            }
            removeGa();
        };
    }, [consent, isReady]);

    return null;
}
