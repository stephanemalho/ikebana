import Link from "next/link";
import CookieButton from "./CookieButton";

export default function CookieBanner() {


    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[--secondary-color]/20 bg-transparent/20 backdrop-blur-md md:min-h-[450px]">
            <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-md shadow-md">
                    <div className="space-y-2 text-sm text-[--secondary-color]">
                        <p className="font-semibold">Gestion des cookies</p>
                        <p>
                            Nous utilisons des cookies essentiels au fonctionnement du site, ainsi que des cookies de
                            mesure d'audience (Google Analytics) uniquement si vous les
                            acceptez.
                        </p>
                        <p>
                            En savoir plus :{" "}
                            <Link className="underline" href="/cookies">
                                Politique cookies
                            </Link>
                        </p>
                    </div>
                    <CookieButton />
                </div>
            </div>
        </div>
    );
}
