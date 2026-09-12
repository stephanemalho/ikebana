import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cours d'ikebana à Paris 1er",
    description: "Cours d'ikebana de l'École Ohara à Paris 1er, à l'Association Franco-Japonaise de Tenri. Cours le lundi et le samedi, pour débutants et pratiquants confirmés.",
    alternates: { canonical: "/cours-ikebana-paris" },
};

const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";

export default function ParisCoursesPage() {
    const courseData = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Cours d'ikebana à Paris 1er",
        description: "Cours d'ikebana selon l'enseignement de l'École Ohara, proposés le lundi et le samedi à Paris 1er.",
        provider: {
            "@id": `${siteUrl}#organization`,
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
                "@type": "Place",
                name: "Association Franco-Japonaise de Tenri",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "8-12 Rue Bertin Poirée",
                    postalCode: "75001",
                    addressLocality: "Paris",
                    addressCountry: "FR",
                },
            },
        },
    };

    return (
        <main className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }} />
            <p className="text-sm uppercase tracking-[0.18em] text-[--secondary-color]/65">Chapitre Yvelines-Paris</p>
            <h1 className="mt-4 text-4xl font-semibold text-[--secondary-color] md:text-5xl" style={{ fontFamily: "var(--playfair-display)" }}>
                Cours d&apos;ikebana à Paris 1er
            </h1>
            <div className="mt-8 grid gap-8 border-y border-[--secondary-color]/15 py-8 md:grid-cols-2">
                <div>
                    <h2 className="text-xl font-medium text-[--secondary-color]">Lieu des cours</h2>
                    <address className="mt-3 not-italic leading-7 text-[--secondary-color]/78">
                        Association Franco-Japonaise de Tenri<br />
                        8–12 rue Bertin-Poirée<br />
                        75001 Paris
                    </address>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[--secondary-color]">Rythme</h2>
                    <p className="mt-3 leading-7 text-[--secondary-color]/78">Cours le lundi et le samedi, ouverts aux débutants comme aux pratiquants confirmés.</p>
                </div>
            </div>
            <section className="mt-10 space-y-5 text-[--secondary-color]/78">
                <h2 className="text-2xl font-medium text-[--secondary-color]" style={{ fontFamily: "var(--playfair-display)" }}>Apprendre l&apos;ikebana à Paris</h2>
                <p className="leading-8">Les cours transmettent l&apos;enseignement de l&apos;École Ohara : une approche qui relie la tradition japonaise, l&apos;observation des saisons et la création contemporaine.</p>
                <p className="leading-8">Pour connaître les modalités d&apos;inscription et choisir le cours adapté, contactez le Chapitre Yvelines-Paris.</p>
                <Link href="/#contact" className="inline-flex border border-[--secondary-color]/25 px-4 py-3 font-medium text-[--secondary-color] transition hover:bg-white">Contacter l&apos;école</Link>
            </section>
        </main>
    );
}
