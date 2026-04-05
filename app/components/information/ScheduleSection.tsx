import Image from "next/image";

import Container from "../ui/Container";

const sectionShellClass =
    "rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const placeCardClass =
    "flex h-full flex-col rounded-[28px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] shadow-[0_18px_44px_rgba(84,52,40,0.08)]";

const badgeClass =
    "inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70";

const panelClass =
    "rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(247,237,232,0.95),rgba(244,232,225,0.78))] p-5";

type LinkItem = {
    label: string;
    href: string;
    itemProp?: string;
};

type Place = {
    id?: string;
    name: string;
    subtitle: string;
    logoSrc: string;
    logoAlt: string;
    streetAddress: string;
    postalCode: string;
    locality: string;
    addressCountry: string;
    mapHref: string;
    phone: string;
    contactLinks: LinkItem[];
    usefulLinks: LinkItem[];
};

const places: Place[] = [
    {
        id: "tenri",
        name: "Association Franco-Japonaise de Tenri",
        subtitle: "Cours le lundi et le samedi",
        logoSrc: "/assets/logo_ecole_japonaise_tenri_paris.jpg",
        logoAlt: "Association culturelle Tenri Paris",
        streetAddress: "8-12 Rue Bertin Poirée",
        postalCode: "75001",
        locality: "Paris",
        addressCountry: "FR",
        mapHref: "https://share.google/vGRB9D9d3TEmGp40n",
        phone: "01 44 76 06 06",
        contactLinks: [
            { label: "01 44 76 06 06", href: "tel:+33144760606", itemProp: "telephone" },
            { label: "Page de contact", href: "https://www.tenri-paris.com/contact/", itemProp: "url" },
            { label: "Email de la professeure", href: "mailto:ikebanaparis@free.fr", itemProp: "email" }
        ],
        usefulLinks: [
            { label: "Site de l'association", href: "https://www.tenri-paris.com/cultures/ikebana/", itemProp: "url" },
            { label: "Localisation Google", href: "https://share.google/vGRB9D9d3TEmGp40n", itemProp: "hasMap" }
        ]
    },
    {
        name: "Centre culturel de Courbevoie",
        subtitle: "Cours au centre culturel",
        logoSrc: "/assets/logo_centre_culturel_courbevoie.jpg",
        logoAlt: "Centre culturel de Courbevoie",
        streetAddress: "14bis square de l'Hôtel de ville",
        postalCode: "92400",
        locality: "Courbevoie",
        addressCountry: "FR",
        mapHref: "https://www.google.com/maps/place/Centre+Culturel+de+Courbevoie",
        phone: "01 71 05 79 49",
        contactLinks: [
            { label: "01 71 05 79 49", href: "tel:+33171057949", itemProp: "telephone" },
            { label: "Informations et contact", href: "https://www.ville-courbevoie.fr/2801/culture-loisirs/centres-culturels.htm", itemProp: "url" }
        ],
        usefulLinks: [
            { label: "Voir sur Google Maps", href: "https://www.google.com/maps/place/Centre+Culturel+de+Courbevoie", itemProp: "hasMap" }
        ]
    },
    {
        name: "Association Fleurs & Japon",
        subtitle: "Cours à Gif-sur-Yvette",
        logoSrc: "/assets/logo_parc_vallee_de_chevreuse.svg",
        logoAlt: "Parc naturel régional de la Vallée de Chevreuse",
        streetAddress: "3 Allée de l'Étang",
        postalCode: "91190",
        locality: "Gif-sur-Yvette",
        addressCountry: "FR",
        mapHref: "https://www.google.com/maps/place/3+Allée+de+l'Étang,+91190+Gif-sur-Yvette,+France",
        phone: "06 32 56 90 75",
        contactLinks: [
            { label: "06 32 56 90 75", href: "tel:+33632569075", itemProp: "telephone" },
            { label: "Contact", href: "https://www.parc-naturel-chevreuse.fr/node/12583", itemProp: "url" }
        ],
        usefulLinks: [
            { label: "Présentation de l'association", href: "https://www.parc-naturel-chevreuse.fr/fleurs-et-japon", itemProp: "url" },
            { label: "Fiche annuaire", href: "https://annuaire-entreprises.data.gouv.fr/etablissement/87765186900019" },
            { label: "Localisation Google Maps", href: "https://www.google.com/maps/place/3+Allée+de+l'Étang,+91190+Gif-sur-Yvette,+France", itemProp: "hasMap" }
        ]
    }
];

function ExternalLink({ href, children, itemProp }: { href: string; children: React.ReactNode; itemProp?: string }) {
    return (
        <a
            href={href}
            target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "noopener noreferrer"}
            className="underline decoration-[--secondary-color]/25 underline-offset-4 transition hover:text-black"
            itemProp={itemProp}
        >
            {children}
        </a>
    );
}

export function ScheduleSection() {
    return (
        <section
            id="cours"
            className="w-full bg-gradient-to-t from-[--primary-color] via-[--primary-color]/60 to-transparent py-14 lg:py-16"
        >
            <Container>
                <div className={sectionShellClass}>
                    <div className="px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
                        <div className="mb-10 max-w-3xl">
                            <span className={`${badgeClass} mb-4`}>Cours d&apos;Ikebana</span>
                            <h2
                                className="text-3xl font-bold text-[--secondary-color] md:text-4xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                Nos cours d&apos;Ikebana
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                Retrouvez les lieux de cours et les contacts pour s&apos;inscrire aux ateliers d&apos;Ikebana à l&apos;adresse de votre choix.
                            </p>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-3">
                            {places.map((place) => (
                                <article
                                    key={place.name}
                                    id={place.id}
                                    className={placeCardClass}
                                    itemScope
                                    itemType="https://schema.org/Place"
                                >
                                    <div className="flex h-full flex-col p-6 md:p-7">
                                        <div className="flex items-start gap-4">
                                            <div className="relative h-14 w-14 shrink-0 rounded-[18px] border border-white/80 bg-white p-2 shadow-[0_12px_24px_rgba(84,52,40,0.08)]">
                                                <Image
                                                    src={place.logoSrc}
                                                    alt={place.logoAlt}
                                                    fill
                                                    className="object-contain p-1"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[--secondary-color]/52">
                                                    Lieu de cours
                                                </p>
                                                <h3
                                                    className="text-2xl font-semibold leading-tight text-[--secondary-color]"
                                                    itemProp="name"
                                                    style={{ fontFamily: "var(--playfair-display)" }}
                                                >
                                                    {place.name}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-[--secondary-color]/72">
                                                    {place.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-7 grid gap-4">
                                            <div className={panelClass}>
                                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[--secondary-color]/58">
                                                    Adresse
                                                </p>
                                                <address
                                                    className="not-italic text-[--secondary-color]/84"
                                                    itemProp="address"
                                                    itemScope
                                                    itemType="https://schema.org/PostalAddress"
                                                >
                                                    <ExternalLink href={place.mapHref}>
                                                        <span itemProp="streetAddress">{place.streetAddress}</span>
                                                        <br />
                                                        <span itemProp="postalCode">{place.postalCode}</span>{" "}
                                                        <span itemProp="addressLocality">{place.locality}</span>
                                                        <br />
                                                        <span itemProp="addressCountry">{place.addressCountry}</span>
                                                    </ExternalLink>
                                                </address>
                                            </div>

                                            <div className={panelClass}>
                                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[--secondary-color]/58">
                                                    Contact
                                                </p>
                                                <ul className="space-y-2 text-[--secondary-color]/84">
                                                    {place.contactLinks.map((link) => (
                                                        <li key={link.href}>
                                                            <ExternalLink href={link.href} itemProp={link.itemProp}>
                                                                {link.label}
                                                            </ExternalLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className={`${panelClass} mt-auto`}>
                                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[--secondary-color]/58">
                                                    Liens utiles
                                                </p>
                                                <ul className="space-y-2 text-[--secondary-color]/84">
                                                    {place.usefulLinks.map((link) => (
                                                        <li key={link.href}>
                                                            <ExternalLink href={link.href} itemProp={link.itemProp}>
                                                                {link.label}
                                                            </ExternalLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
