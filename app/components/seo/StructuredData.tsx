import { faqItems } from "@/app/constant/seo/faq";
import { sectionLinks } from "@/app/constant/seo/sections";

const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "NonprofitOrganization",
            "@id": `${siteUrl}#organization`,
            name: "Ikebana Ohara - Chapitre Yvelines",
            legalName: "IKEBANA OHARA YVELINES BORDS DE SEINE",
            url: siteUrl,
            email: "ikebana.ybs@gmail.com",
            telephone: "+33610366745",
            foundingDate: "2018-09-22",
            address: {
                "@type": "PostalAddress",
                streetAddress: "26 44 RUE DU PLATEAU DU MOULIN",
                postalCode: "78700",
                addressLocality: "Conflans-Sainte-Honorine",
                addressRegion: "Île-de-France",
                addressCountry: "FR"
            },
            areaServed: [
                {
                    "@type": "AdministrativeArea",
                    "name": "Île-de-France"
                }
            ]
            ,
            sameAs: [
                "https://www.instagram.com/ikebanaparis/",
                "https://www.facebook.com/ikuko.katoenfroy/"
            ],
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: "+33610366745",
                    email: "ikebana.ybs@gmail.com",
                    availableLanguage: ["fr"]
                }
            ],
            identifier: [
                {
                    "@type": "PropertyValue",
                    propertyID: "SIREN",
                    value: "852927151"
                },
                {
                    "@type": "PropertyValue",
                    propertyID: "SIRET",
                    value: "85292715100013"
                },
                {
                    "@type": "PropertyValue",
                    propertyID: "NAF",
                    value: "94.99Z"
                }
            ],
            logo: `${siteUrl}/images/logo-ikebana-chapitre-yvelines-paris.png`,
            image: [
                `${siteUrl}/images/logo-ikebana-chapitre-yvelines-paris.png`,
                `${siteUrl}/assets/ikuko_kato.jpg`
            ],
            foundingLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "26 44 RUE DU PLATEAU DU MOULIN",
                    postalCode: "78700",
                    addressLocality: "Conflans-Sainte-Honorine",
                    addressRegion: "Île-de-France",
                    addressCountry: "FR"
                }
            }
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}#website`,
            url: siteUrl,
            name: "Ikebana Ohara - Chapitre Yvelines",
            inLanguage: "fr",
            publisher: {
                "@id": `${siteUrl}#organization`
            }
        },
        {
            "@type": "WebPage",
            "@id": `${siteUrl}#webpage`,
            url: siteUrl,
            name: "École d'Ikebana Ohara - Cours et enseignement floral à Paris et dans les Yvelines",
            description:
                "L'École d'Ikebana Ohara - Chapitre Yvelines Paris transmet l'art japonais de l'ikebana selon l'enseignement officiel de l'École Ohara, à travers trois lieux d'enseignement à Paris et en Île-de-France.",
            isPartOf: {
                "@id": `${siteUrl}#website`
            },
            about: {
                "@id": `${siteUrl}#organization`
            },
            inLanguage: "fr",
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: `${siteUrl}/images/logo-ikebana-chapitre-yvelines-paris.png`
            },
            breadcrumb: {
                "@id": `${siteUrl}#breadcrumb`
            }
        },
        {
            "@type": "Person",
            "@id": `${siteUrl}#person-ikuko-kato`,
            name: "Ikuko Kurenai Kato",
            jobTitle: "Présidente",
            affiliation: {
                "@id": `${siteUrl}#organization`
            },
            sameAs: [
                "https://www.facebook.com/ikuko.katoenfroy/"
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${siteUrl}#breadcrumb`,
            itemListElement: sectionLinks.map((section, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: section.label,
                item: section.id === "top" ? siteUrl : `${siteUrl}#${section.id}`
            }))
        },
        {
            "@type": "FAQPage",
            "@id": `${siteUrl}#faq`,
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer
                }
            }))
        },
        {
            "@type": "EventSeries",
            "@id": `${siteUrl}#event-ikebana-tenri`,
            name: "Cours d'Ikebana - Association Tenri",
            description: "Cours d'ikebana au sein de l'Association Tenri.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
                "@type": "Place",
                name: "Association Tenri",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "8-12 Rue Bertin Poirée",
                    postalCode: "75001",
                    addressLocality: "Paris",
                    addressCountry: "FR"
                }
            },
            organizer: {
                "@id": `${siteUrl}#organization`
            },
            eventSchedule: {
                "@type": "Schedule",
                repeatFrequency: "P1W",
                byDay: [
                    "https://schema.org/Monday",
                    "https://schema.org/Saturday"
                ]
            }
        },
        {
            "@type": "EventSeries",
            "@id": `${siteUrl}#event-ikebana-courbevoie`,
            name: "Cours d'Ikebana - Centre culturel de Courbevoie",
            description: "Cours d'ikebana au centre culturel de Courbevoie.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
                "@type": "Place",
                name: "Centre culturel de Courbevoie",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "14bis square de l'Hôtel de ville",
                    postalCode: "92400",
                    addressLocality: "Courbevoie",
                    addressCountry: "FR"
                }
            },
            organizer: {
                "@id": `${siteUrl}#organization`
            }
        },
        {
            "@type": "EventSeries",
            "@id": `${siteUrl}#event-ikebana-gif`,
            name: "Cours d'Ikebana - Association Fleurs & Japon",
            description: "Cours d'ikebana à Gif-sur-Yvette.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
                "@type": "Place",
                name: "Association Fleurs & Japon",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "3 All. de l'Étang",
                    postalCode: "91190",
                    addressLocality: "Gif-sur-Yvette",
                    addressCountry: "FR"
                }
            },
            organizer: {
                "@id": `${siteUrl}#organization`
            }
        }
    ]
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            // JSON-LD must be stringified for the script tag.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
