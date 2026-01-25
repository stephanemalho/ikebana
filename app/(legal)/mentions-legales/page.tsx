import Container from "@/app/components/ui/Container";
import Link from "next/link";

export default function MentionsLegalesPage() {
    return (
        <main className="py-12 bg-[--primary-color] mt-[60px] min-h-[calc(100vh-280px)]">
            <Container>
                <div className="px-4 md:px-6 space-y-8 text-[--secondary-color]">
                    <header className="space-y-2">
                        <Link className="text-sm underline" href="/">
                            Retour à l'accueil
                        </Link>
                        <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                            Mentions légales
                        </h1>
                        <p className="text-sm">Dernière mise à jour : 24/01/2026</p>
                    </header>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Éditeur du site</h2>
                        <p>Association : IKEBANA OHARA YVELINES BORDS DE SEINE</p>
                        <p>Nom public : Ikebana Ohara - Chapitre Yvelines</p>
                        <p>Adresse : 26 44 RUE DU PLATEAU DU MOULIN, 78700 CONFLANS-SAINTE-HONORINE</p>
                        <p>Téléphone : 06 10 36 67 45</p>
                        <p>SIREN : 852 927 151</p>
                        <p>SIRET : 852 927 151 00013</p>
                        <p>Liens vers data.gouv: <a target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                            href="https://annuaire-entreprises.data.gouv.fr/dirigeants/852927151">Liens vers les origines des infos.</a></p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Directrice de la publication</h2>
                        <p>Ikuko Kurenai Kato, Présidente</p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Hébergement</h2>
                        <p>Vercel Inc. (hébergeur)</p>
                        <p>Adresse : à compléter</p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
                        <p>
                            L'ensemble des contenus (textes, images, logos, vidéos, graphismes) est protégé par le droit
                            d'auteur. Toute reproduction ou réutilisation sans autorisation écrite est interdite.
                        </p>
                    </section>
                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Crédits images</h2>

                        <p>
                            Les photographies d'arrangements floraux, de fleurs et d'ikebana présentées sur ce site
                            sont la propriété de l'association <strong>Ikebana Ohara - Chapitre Yvelines Paris</strong>,
                            sauf mention contraire.
                        </p>

                        <p>
                            Les images, documents et visuels relatifs à l'histoire de l'École Ohara, à ses fondateurs,
                            à ses maîtres (Iemoto) ou à ses archives historiques sont la propriété exclusive de
                            l'<strong>École Ohara (小原流, Ohara-ryū)</strong>.
                            Ils sont utilisés sur ce site à des fins d'information culturelle et pédagogique.
                        </p>

                        <p>
                            Tous droits réservés à l'École Ohara.
                            Site officiel de l'École Ohara :
                            {" "}
                            <a
                                href="https://www.ohararyu.or.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                https://www.ohararyu.or.jp/
                            </a>
                        </p>
                    </section>

                </div>
            </Container>
        </main>
    );
}
