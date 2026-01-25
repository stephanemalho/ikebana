import Container from "@/app/components/ui/Container";
import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="py-12 bg-[--primary-color] mt-[60px] min-h-[calc(100vh-280px)]">
            <Container>
                <div className="px-4 md:px-6 space-y-8 text-[--secondary-color]">
                    <header className="space-y-2">
                        <Link className="text-sm underline" href="/">
                            Retour à l'accueil
                        </Link>
                        <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                            Politique de confidentialité
                        </h1>
                        <p className="text-sm">Dernière mise à jour : 24/01/2026</p>
                    </header>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Responsable de traitement</h2>
                        <p>Association IKEBANA OHARA YVELINES BORDS DE SEINE</p>
                        <p>Adresse : 26 44 RUE DU PLATEAU DU MOULIN, 78700 CONFLANS-SAINTE-HONORINE</p>
                        <p>Email : ikebana.ybs@gmail.com</p>
                        <p>Téléphone : 06 10 36 67 45</p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Données collectées</h2>
                        <p>
                            Les données collectées sont celles que vous communiquez via le formulaire de contact ou par
                            téléphone/email (identité, coordonnées, message).
                        </p>
                        <p>
                            Des données de navigation anonymisées peuvent être collectées à des fins de mesure d'audience
                            si vous acceptez les cookies (Google Analytics uniquement).
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Finalités</h2>
                        <p>
                            Répondre à vos demandes, gérer les inscriptions, améliorer le contenu du site et mesurer
                            l'audience.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Base légale</h2>
                        <p>Consentement et intérêt légitime (amélioration du service).</p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Durée de conservation</h2>
                        <p>
                            Les données de contact sont conservées pendant une durée maximale de 3 ans après le dernier
                            échange, sauf obligation légale différente.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Destinataires</h2>
                        <p>
                            Les données sont destinées uniquement à l'association. Des outils tiers peuvent traiter des
                            données techniques (Google) si vous acceptez les cookies de mesure d'audience.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Vos droits</h2>
                        <p>
                            Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation du traitement
                            de vos données en nous contactant à l'adresse : ikebana.ybs@gmail.com.
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
