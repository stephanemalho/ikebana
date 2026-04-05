import Container from "../ui/Container";
import { BookOpen, Flower, Leaf, Trees, Eye, Palette, Sprout } from "lucide-react";

const shellClass =
    "w-full overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const cardClass =
    "rounded-[24px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] shadow-[0_18px_44px_rgba(84,52,40,0.08)]";

const iconWrapClass =
    "flex h-12 w-12 items-center justify-center rounded-[16px] border border-[--secondary-color]/10 bg-[linear-gradient(180deg,#f5e8e1_0%,#efe1da_100%)] text-[--secondary-color]";

const learningSteps = [
    {
        title: "Observation",
        description:
            "Observer les saisons, les végétaux et les rythmes du vivant pour comprendre la composition avant même de la réaliser.",
        icon: Eye
    },
    {
        title: "Pratique",
        description:
            "Travailler les formes de base avec des matériaux variés afin d'affiner le geste, l'équilibre et la sensibilité.",
        icon: Palette
    },
    {
        title: "Évolution",
        description:
            "Approfondir progressivement les styles traditionnels et libres, avec l'accompagnement du maître et une critique constructive.",
        icon: Sprout
    }
];

function IkebanaInfo() {
    return (
        <section className="px-2 py-16">
            <Container>
                <div className={shellClass}>
                    <div className="px-5 py-10 md:px-8 lg:px-10">
                        <header id="le-style-ohara" className="mx-auto mb-14 max-w-3xl text-center">
                            <span className="mb-4 inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70">
                                Art floral japonais
                            </span>
                            <h2
                                className="mb-5 text-3xl font-bold text-[var(--secondary-color)] md:text-4xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                Qu&apos;est-ce que l&apos;Ikebana ?
                            </h2>
                            <p className="text-base leading-relaxed text-[--secondary-color]/80 md:text-lg">
                                Une discipline artistique où la ligne, le vide, les saisons et l&apos;intention comptent autant que la fleur elle-meme.
                            </p>
                        </header>

                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                            <article className={`${cardClass} p-7 md:p-8`}>
                                <div className="mb-6 flex items-start gap-4">
                                    <div className={iconWrapClass}>
                                        <BookOpen size={22} aria-hidden />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-2xl font-semibold text-[--secondary-color]"
                                            style={{ fontFamily: "var(--playfair-display)" }}
                                        >
                                            Une tradition vivante
                                        </h3>
                                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[--secondary-color]/50">
                                            Plus de 600 ans d&apos;histoire
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-[--secondary-color]/85">
                                    <p className="leading-relaxed">
                                        L&apos;Ikebana, l&apos;un des arts traditionnels du Japon, se pratique depuis plus de <strong>600 ans</strong>.
                                        Il trouve son origine dans les offrandes florales faites aux morts dans les rites bouddhistes.
                                    </p>
                                    <p className="leading-relaxed">
                                        Vers le milieu du XVe siècle, il acquiert le statut d&apos;art autonome. Il se détache progressivement
                                        de ses origines religieuses tout en conservant une profondeur symbolique et philosophique.
                                    </p>
                                </div>
                            </article>

                            <aside className="grid gap-6">
                                <article className="rounded-[24px] border border-[--secondary-color]/10 bg-[linear-gradient(180deg,#f1dfd7_0%,#ead1c6_100%)] p-6 shadow-[0_16px_34px_rgba(84,52,40,0.08)]">
                                    <Flower size={32} className="mb-5 text-[--secondary-color]" aria-hidden />
                                    <h3
                                        className="mb-3 text-xl font-semibold text-[--secondary-color]"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        Philosophie
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[--secondary-color]/85">
                                        Créer une beauté qui n&apos;existe pas telle quelle dans la nature, grâce a l&apos;asymétrie, au rythme
                                        des lignes et a la puissance du vide.
                                    </p>
                                </article>

                                <article className={`${cardClass} p-6`}>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className={iconWrapClass}>
                                            <Leaf size={20} aria-hidden />
                                        </div>
                                        <h3
                                            className="text-xl font-semibold text-[--secondary-color]"
                                            style={{ fontFamily: "var(--playfair-display)" }}
                                        >
                                            Matériaux
                                        </h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-[--secondary-color]/85">
                                        <li>Fleurs et boutons</li>
                                        <li>Branches, feuilles et herbes</li>
                                        <li>Mousses, fruits et bourgeons</li>
                                        <li>Feuilles séchées ou éléments saisonniers</li>
                                    </ul>
                                    <p className="mt-4 text-xs italic text-[--secondary-color]/65">
                                        Chaque élément a la meme valeur expressive qu&apos;une fleur pleinement éclose.
                                    </p>
                                </article>
                            </aside>
                        </div>

                        <article className={`mt-6 ${cardClass} overflow-hidden`}>
                            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                                <div className="bg-[linear-gradient(160deg,#f1dfd7_0%,#e5cbc0_100%)] p-7 md:p-8">
                                    <div className="mb-5 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white/80 text-[--secondary-color] shadow-sm">
                                            <Trees size={22} aria-hidden />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-2xl font-semibold text-[--secondary-color]"
                                                style={{ fontFamily: "var(--playfair-display)" }}
                                            >
                                                L&apos;École Ohara
                                            </h3>
                                            <p className="mt-1 text-sm text-[--secondary-color]/60">
                                                Une approche naturaliste et contemporaine de l&apos;ikebana
                                            </p>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed text-[--secondary-color]/85">
                                        L&apos;École Ohara a développé des formes qui dialoguent avec le paysage, les saisons et les volumes
                                        naturels. Elle relie l&apos;héritage classique a une lecture plus sensible et moderne du végétal.
                                    </p>
                                </div>

                                <div className="grid gap-px bg-[#ead9d1] md:grid-cols-2">
                                    <div className="bg-[linear-gradient(180deg,#fffdfa_0%,#f8eee8_100%)] p-7">
                                        <h4 className="mb-2 text-lg font-semibold text-[--secondary-color]">Style Moribana</h4>
                                        <p className="text-sm leading-relaxed text-[--secondary-color]/80">
                                            Utilise des vases plats et peu profonds, idéals pour les compositions paysagères et l&apos;expression
                                            d&apos;une nature mise en scène.
                                        </p>
                                    </div>
                                    <div className="bg-[linear-gradient(180deg,#fffdfa_0%,#f8eee8_100%)] p-7">
                                        <h4 className="mb-2 text-lg font-semibold text-[--secondary-color]">Style Heika</h4>
                                        <p className="text-sm leading-relaxed text-[--secondary-color]/80">
                                            Utilise de hauts vases cylindriques et privilégie des lignes verticales plus sobres, élégantes et
                                            structurées.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <section className={`mt-6 ${cardClass} p-7 md:p-8`}>
                            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                                <div>
                                    <h3
                                        className="text-2xl font-semibold text-[--secondary-color]"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        Le chemin de l&apos;apprentissage
                                    </h3>
                                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[--secondary-color]/75">
                                        L&apos;ikebana se construit dans le temps, par la répétition, l&apos;observation et l&apos;évolution du regard.
                                    </p>
                                </div>
                                <span className="rounded-sm border border-[--secondary-color]/12 bg-[--primary-color]/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[--secondary-color]/60">
                                    Observer • pratiquer • évoluer
                                </span>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {learningSteps.map((step) => {
                                    const Icon = step.icon;

                                    return (
                                        <article
                                            key={step.title}
                                            className="rounded-[22px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f8eee8_100%)] p-6"
                                        >
                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#f5e8e1_0%,#efe1da_100%)] text-[--secondary-color]">
                                                <Icon size={24} aria-hidden />
                                            </div>
                                            <h4 className="mb-3 text-lg font-semibold text-[--secondary-color]">{step.title}</h4>
                                            <p className="text-sm leading-relaxed text-[--secondary-color]/80">{step.description}</p>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <div className="mt-12 text-center">
                            <blockquote
                                className="mx-auto max-w-4xl text-lg italic leading-relaxed text-[var(--secondary-color)] md:text-2xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                &quot;Ce qui distingue l&apos;ikebana d&apos;une simple décoration, c&apos;est sa forme asymétrique et
                                l&apos;utilisation de l&apos;espace vide comme donnée essentielle de la composition.&quot;
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default IkebanaInfo;
