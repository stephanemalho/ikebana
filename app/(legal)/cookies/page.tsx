import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import CookiePreferencesButton from "@/app/components/seo/CookiePreferencesButton";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Politique de cookies",
    description:
        "Politique de cookies de l'École Ikebana Ohara - Chapitre Yvelines Paris : cookies essentiels, mesure d'audience et gestion du consentement.",
    alternates: {
        canonical: "/cookies"
    }
};

export default function CookiesPage() {
    return (
        <main className="py-12 bg-[--primary-color] mt-[60px] min-h-[calc(100vh-280px)]"> 
            <Container>
                <div className="px-4 md:px-6 space-y-8 text-[--secondary-color]">
                    <header className="space-y-2">
                        <Link className="text-sm underline" href="/">
                            Retour à l'accueil
                        </Link>
                        <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                            Politique de cookies
                        </h1>
                        <p className="text-sm">Dernière mise à jour : 24/01/2026</p>
                    </header>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Qu'est-ce qu'un cookie ?</h2>
                        <p>
                            Un cookie est un petit fichier stocké sur votre terminal qui permet d'améliorer votre
                            expérience, de mesurer l'audience et de sécuriser certaines fonctionnalités.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Cookies utilisés</h2>
                        <p>
                            Le site utilise un cookie de consentement indispensable au fonctionnement du gestionnaire de
                            cookies.
                        </p>
                        <ul className="list-disc pl-6">
                            <li>
                                <strong>ikebana_cookie_consent</strong> : mémorise votre choix (durée 12 mois).
                            </li>
                        </ul>
                        <p className="mt-2">
                            Des cookies de mesure d'audience peuvent être déposés si vous acceptez :
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Google Analytics (ex : _ga, _ga_*)</li>
                        </ul>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Gérer vos préférences</h2>
                        <p>Vous pouvez modifier votre choix à tout moment.</p>
                        <CookiePreferencesButton />
                    </section>
                </div>
            </Container>
        </main>
    );
}
