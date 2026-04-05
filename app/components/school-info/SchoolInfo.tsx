import Image from "next/image";
import Link from "next/link";

const shellClass =
    "w-full overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const cardClass =
    "rounded-[24px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] shadow-[0_18px_44px_rgba(84,52,40,0.08)]";

const accentCardClass =
    "rounded-[24px] border border-[--secondary-color]/10 bg-[linear-gradient(160deg,#f1dfd7_0%,#e5cbc0_100%)] shadow-[0_18px_44px_rgba(84,52,40,0.08)]";

const badgeClass =
    "inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70";

function SchoolInfo() {
    return (
        <section className="px-2 pb-16">
            <div className={shellClass}>
                <div className="px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
                    <header className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
                        <span className={`${badgeClass} mb-4`}>
                            École Ohara
                        </span>
                        <div className="mb-5 flex items-center justify-center gap-4">
                            <Image
                                src="/images/ohara/logo-ohara-officiel.png"
                                alt="Logo officiel de l'École Ohara au Japon"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <h2
                                id="ecole-ohara"
                                className="text-3xl font-bold text-[var(--secondary-color)] md:text-4xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                Qu&apos;est-ce que l&apos;École Ohara
                            </h2>
                        </div>
                    </header>

                    <section className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.8fr)] xl:items-start">
                        <article className={`${cardClass} p-8 md:p-10 lg:p-11`}>
                            <div className="mb-8 max-w-[34rem]">
                                <span className={`${badgeClass} mb-3`}>Présentation Générale</span>
                                <h3
                                    className="text-2xl font-semibold leading-tight text-[--secondary-color] md:text-[2.15rem]"
                                    style={{ fontFamily: "var(--playfair-display)" }}
                                >
                                    Présentation Générale
                                </h3>
                            </div>

                            <div className="max-w-[42rem] space-y-5 text-[--secondary-color]/85">
                                <p className="text-base leading-8 md:text-[1.0625rem]">
                                    L&apos;école Ohara <Link className="hover:underline" href="https://www.ohararyu.or.jp/" target="_blank"><strong>(小原流, Ohara-ryū)</strong></Link> est l&apos;une des plus grandes écoles d&apos;Ikebana au Japon.
                                    Elle a été fondée à Tokyo à la fin du XIXᵉ siècle (vers 1895), durant l&apos;époque Meiji <strong>(明治時代,Meiji jidai)</strong>, par <strong>Unshin Ohara</strong>.
                                </p>
                                <p className="text-base leading-8 md:text-[1.0625rem]">
                                    Contrairement aux écoles plus anciennes comme Ikenobō, dont la pratique est très codifiée et cérémoniale, l&apos;école Ohara propose une approche naturaliste, expressive et contemporaine.
                                    Elle a joué un rôle essentiel dans l&apos;évolution de l&apos;Ikebana en introduisant de nouvelles formes, comme le moribana, inspirées des paysages naturels.
                                </p>
                            </div>
                        </article>

                        <article className={`${accentCardClass} self-start p-8 md:p-9 lg:p-10`}>
                            <figure className="mx-auto max-w-[16rem] text-center text-[--secondary-color]">
                                <div className="mx-auto flex w-full justify-center rounded-[28px] border border-white/65 bg-[linear-gradient(180deg,rgba(255,252,250,0.72),rgba(255,247,243,0.5))] p-5 shadow-[0_18px_44px_rgba(84,52,40,0.08)]">
                                    <Image
                                        src="/images/ohara/unshin-ohara-portrait.webp"
                                        alt="Portrait de Unshin Ohara fondateur de l'école Ohara d'Ikebana"
                                        width={180}
                                        height={180}
                                        className="h-auto w-[180px] rounded-full object-cover"
                                        sizes="180px"
                                    />
                                </div>
                                <figcaption className="mt-4 text-xs leading-6 text-[--secondary-color]/70 md:text-sm">
                                    Portrait ancien de Unshin Ohara.<br />&copy; Ohararyu All rights reserved
                                </figcaption>
                            </figure>
                        </article>
                    </section>

                    <section className="mt-8 grid gap-8 lg:grid-cols-2">
                        <article className={`${cardClass} h-full overflow-hidden`}>
                            <div className="grid h-full gap-0">
                                <figure className="p-6 pb-0">
                                    <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] p-4 shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px]">
                                            <Image
                                                src="/images/ohara/ikebana-historical-unshin-ohara.webp"
                                                alt="arrangement historique de Unshin Ohara"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1023px) 100vw, 48vw"
                                            />
                                        </div>
                                    </div>
                                    <figcaption className="pt-4 text-sm leading-relaxed text-[--secondary-color]/72">
                                        Une composition historique de Unshin Ohara, emblématique de l&apos;esprit naturaliste et paysager développé par l&apos;École Ohara.
                                    </figcaption>
                                </figure>
                                <div className="p-8 text-[--secondary-color] md:p-10">
                                    <span className={`${badgeClass} mb-4`}>Histoire de l&apos;école Ohara</span>
                                    <h3
                                        className="mb-5 text-2xl font-semibold leading-tight md:text-[2.1rem]"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        Histoire de l&apos;école Ohara
                                    </h3>
                                    <div className="max-w-[42rem] space-y-5 text-[--secondary-color]/82">
                                        <p className="text-base leading-8 md:text-[1.03rem]">
                                            Unshin Ohara a fondé l&apos;école qui porte son nom en 1895, au moment où le Japon s&apos;ouvrait à l&apos;Occident. Il a fondé le style Moribana, lequel débouchera plus tard sur l&apos;arrangement paysagiste. C&apos;est aussi lui qui dessinait et produisait les vases larges et peu profonds qui conviennent parfaitement à l&apos;Ikebana du style Moribana.
                                        </p>
                                        <p className="text-base leading-8 md:text-[1.03rem]">
                                            Il y a deux formes d&apos;Ikebana dans l&apos;école Ohara : le style <strong>Moribana</strong> qui utilise ces vases plats et peu profonds, et le style <strong>Héika</strong> qui utilise de hauts vases cylindriques. Les débutants doivent apprendre à maîtriser un certain nombre d&apos;arrangements de base dans ces deux styles en composant des matériaux toujours différents.
                                        </p>
                                        <p className="text-base leading-8 md:text-[1.03rem]">
                                            En 1995, l&apos;école Ohara a fêté son centenaire. Le premier maître fondateur, <strong>Unshin Ohara</strong> a créé le style <strong>Moribana</strong>. Son successeur, <strong>Koun Ohara</strong> a défini les règles du style <strong>Moribana</strong>. Le troisième grand maître, <strong>Houn Ohara</strong> a enrichi les motifs grâce aux références à la littérature, créant ainsi les styles <strong>Bunjin</strong> et <strong>Rimpa</strong>. Le quatrième grand maître <strong>Natsuki Ohara</strong> a développé de nouvelles formes modernes, <strong>Hana-mai</strong> et <strong>Hana-isho</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className={`${cardClass} h-full overflow-hidden`}>
                            <div className="flex h-full flex-col p-8 text-[--secondary-color] md:p-10">
                                <div className="max-w-[42rem]">
                                    <span className={`${badgeClass} mb-4`}>L&apos;école Ohara aujourd&apos;hui</span>
                                    <h3
                                        className="mb-5 text-2xl font-semibold leading-tight md:text-[2.1rem]"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        L&apos;école Ohara aujourd&apos;hui
                                    </h3>
                                    <p className="text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                        Aujourd&apos;hui, l&apos;École Ohara poursuit son développement sous la direction de
                                        <strong> Hiroki Ohara</strong>, cinquième Iemoto. Héritier d&apos;une tradition plus que centenaire,
                                        il continue d&apos;enrichir l&apos;ikebana en l&apos;inscrivant dans le monde contemporain.
                                        En 2011, il crée le style <strong>Hana-kanade</strong>, une expression moderne qui met en valeur
                                        la tension des lignes et le dialogue subtil entre les végétaux.
                                    </p>
                                </div>

                                <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_15rem] xl:items-start">
                                    <p className="max-w-[34rem] text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                        Forte de cette vision, l&apos;École Ohara rayonne aujourd&apos;hui bien au-delà du Japon.
                                        Elle dispose de bureaux à Tokyo et à Osaka, de <strong>146 chapitres au Japon</strong> et de
                                        plus de <strong>100 chapitres à l&apos;international</strong>, rassemblant plusieurs
                                        <strong> centaines de milliers de pratiquants</strong> à travers le monde.
                                    </p>

                                    <div className="mx-auto w-full max-w-[15rem] xl:mx-0 xl:ml-auto">
                                        <figure>
                                            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                                <Image
                                                    src="/images/ohara/hiroki-ohara-portrait.webp"
                                                    alt="Portrait de Hiroki Ohara, cinquième Iemoto de l'école Ohara"
                                                    fill
                                                    className="object-contain object-bottom p-4 md:p-5"
                                                    sizes="(max-width: 1279px) 240px, 18vw"
                                                />
                                            </div>
                                            <figcaption className="mt-4 text-xs leading-6 text-[--secondary-color]/65">
                                                Portrait de Hiroki Ohara.<br />&copy; Ohararyu All rights reserved
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>

                                <figure className="mt-8">
                                    <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] p-4 shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                                            <Image
                                                src="/assets/Moribana-tashu-ike-printemps.jpg"
                                                alt="Composition moribana tashu ike au printemps"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1279px) 100vw, 48vw"
                                            />
                                        </div>
                                    </div>
                                    <figcaption className="mt-4 text-sm leading-relaxed text-[--secondary-color]/65">
                                        Moribana tashu ike au printemps, dans l&apos;esprit de composition saisonnière de l&apos;École Ohara.
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    </section>

                    <section className={`mt-6 ${accentCardClass} overflow-hidden`}>
                        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.92fr)] lg:items-start lg:p-10">
                            <div className="text-[--secondary-color]">
                                <span className={`${badgeClass} mb-4 bg-white/55`}>École Ohara Chapitre Yvelines-Paris</span>
                                <h2
                                    id="nos-activites"
                                    className="mb-4 text-3xl font-semibold"
                                    style={{ fontFamily: "var(--playfair-display)" }}
                                >
                                    École Ohara Chapitre Yvelines-Paris
                                </h2>
                                <div className="space-y-4 text-[--secondary-color]/84">
                                    <p className="leading-relaxed">
                                        <strong>L&apos;École Ohara chapitre Yvelines-Paris</strong> a été créée en 2019 avec l&apos;approbation du Iemoto <strong>Hiroki Ohara</strong>. Nous sommes actifs et impliqués depuis.
                                    </p>
                                    <p className="leading-relaxed">
                                        Grâce à l&apos;Ikebana, nous souhaitons étudier la culture, les coutumes, les habitudes et l&apos;histoire japonaise, nous souhaitons ressentir le lien entre l&apos;homme et la nature.
                                    </p>
                                    <p className="leading-relaxed font-semibold">
                                        Nous sommes convaincus que notre mission est de transmettre l&apos;ikebana authentique de l&apos;école Ohara.
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[--secondary-color]/12 pt-8">
                                    <h3
                                        className="mb-4 text-2xl font-semibold"
                                        style={{ fontFamily: "var(--playfair-display)" }}
                                    >
                                        Une transmission officielle en France
                                    </h3>
                                    <div className="space-y-4 text-[--secondary-color]/84">
                                        <p className="leading-relaxed">
                                            C&apos;est dans cette continuité que s&apos;inscrit l&apos;<strong>École Ohara - Chapitre Yvelines-Paris</strong>, créée en 2019 avec l&apos;approbation directe du Iemoto <strong>Hiroki Ohara</strong>. Elle constitue un lien vivant entre la tradition japonaise et la pratique de l&apos;ikebana en France.
                                        </p>
                                        <p className="leading-relaxed">
                                            À travers nos cours, nous transmettons bien plus qu&apos;une technique florale : nous invitons à découvrir la culture japonaise, ses valeurs, son rapport à la nature et à l&apos;espace. L&apos;ikebana devient alors un chemin de sensibilité, d&apos;observation et de création personnelle.
                                        </p>
                                        <p className="leading-relaxed font-semibold">
                                            Notre engagement est de partager un ikebana fidèle à l&apos;esprit de l&apos;École Ohara, accessible à tous, dans le respect de son enseignement officiel.
                                        </p>
                                        <p className="leading-relaxed">
                                            Rejoindre le Chapitre Yvelines-Paris, c&apos;est intégrer une école reconnue internationalement tout en pratiquant l&apos;ikebana dans un cadre local, bienveillant et authentique.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link href="#cours" className="font-semibold text-sm text-[--secondary-color] underline decoration-[--secondary-color]/30 underline-offset-4 hover:text-black">
                                        S&apos;inscrire aux cours d&apos;ikebana - École Ohara Yvelines-Paris et devenir membre de l&apos;École Ohara
                                    </Link>
                                </div>
                            </div>

                            <div className="self-start space-y-6">
                                <figure className="rounded-[24px] border border-white/65 bg-white/55 p-4 shadow-[0_18px_44px_rgba(84,52,40,0.08)]">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                                        <Image
                                            src="/images/ikuko/groupe-eleve-avec-ikuko.jpg"
                                            alt="Ikuko Kato avec un groupe d'élèves lors d'un moment de transmission autour de l'ikebana"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1023px) 100vw, 36vw"
                                        />
                                    </div>
                                    <figcaption className="pt-4 text-sm leading-relaxed text-[--secondary-color]/78">
                                        Ikuko Kato entourée de ses élèves lors d&apos;un temps de pratique et de partage autour de l&apos;ikebana.
                                    </figcaption>
                                </figure>

                                <figure className="rounded-[24px] border border-white/65 bg-white/55 p-4 shadow-[0_18px_44px_rgba(84,52,40,0.08)]">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
                                        <Image
                                            src="/assets/Katamukeru-katachi-Printemps.jpg"
                                            alt="Composition katamukeru katachi au printemps"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1023px) 100vw, 36vw"
                                        />
                                    </div>
                                    <figcaption className="pt-4 text-sm leading-relaxed text-[--secondary-color]/78">
                                        Katamukeru katachi au printemps, une composition qui met en valeur l&apos;inclinaison des lignes et l&apos;équilibre saisonnier propres à l&apos;ikebana.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] lg:items-start">
                        <article className={`${cardClass} p-8 md:p-10`}>
                            <div className="mb-5">
                                <span className={`${badgeClass} mb-4`}>Nos Activités</span>
                                <h3
                                    className="text-2xl font-semibold text-[--secondary-color]"
                                    style={{ fontFamily: "var(--playfair-display)" }}
                                >
                                    Nos Activités
                                </h3>
                            </div>

                            <div className="space-y-5 text-[--secondary-color]/82">
                                <p className="text-base leading-8 md:text-[1.03rem]">
                                    L&apos;École Ikebana Ohara chapitre Yvelines - Paris, propose des activités culturelles et pédagogiques autour de l&apos;art floral japonais, accessibles aux débutants comme aux pratiquants plus avancés.
                                </p>
                                <p className="text-base leading-8 md:text-[1.03rem]">
                                    Nos actions s&apos;articulent autour de cours réguliers, d&apos;ateliers thématiques et de temps de transmission dédiés à la découverte de l&apos;Ikebana dans le respect de la tradition Ohara.
                                </p>
                                <p className="text-base leading-8 md:text-[1.03rem]">
                                    L&apos;association organise également des rencontres culturelles, des démonstrations publiques et des projets collectifs visant à faire connaître l&apos;esthétique japonaise, sa philosophie et son lien étroit avec la nature et les saisons.
                                </p>
                                <p className="text-base leading-8 md:text-[1.03rem]">
                                    Nous organisons une exposition florale annuelle, des ateliers saisonniers, des ateliers avec des maîtres déplacés de l&apos;École Ohara au Japon, des voyages au Japon.
                                </p>
                            </div>
                        </article>

                        <article className={`${cardClass} self-start p-6 md:p-8`}>
                            <figure>
                                <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] p-4 shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                                        <Image
                                            src="/assets/ikuko_kato.webp"
                                            alt="Ikuko Kato Kurenaï, présidente du chapitre Yvelines-Paris"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1023px) 100vw, 22vw"
                                        />
                                    </div>
                                </div>
                                <figcaption className="pt-4 text-sm leading-relaxed text-[--secondary-color]/72">
                                    Présidente KATO Kurenaï <span className="font-medium">加藤 紅</span>
                                </figcaption>
                            </figure>
                        </article>
                    </section>

                    <section className={`mt-6 ${cardClass} overflow-hidden`}>
                        <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                            <figure className="p-6 pb-0">
                                <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,#f7ede8_0%,#f0e0d8_100%)] p-4 shadow-[0_20px_42px_rgba(84,52,40,0.08)]">
                                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                                        <Image
                                            src="/assets/ikebana-ateru-katachi-printemps.JPG"
                                            alt="Composition ikebana ateru katachi au printemps"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1023px) 100vw, 42vw"
                                        />
                                    </div>
                                </div>
                            </figure>
                            <div className="p-8 text-[--secondary-color] md:p-10">
                                <span className={`${badgeClass} mb-4`}>L&apos;Ikebana</span>
                                <h2
                                    id="ikebana"
                                    className="mb-4 text-3xl font-semibold"
                                    style={{ fontFamily: "var(--playfair-display)" }}
                                >
                                    L&apos;Ikebana
                                </h2>
                                <div className="space-y-5 text-[--secondary-color]/82">
                                    <p className="text-base leading-8 md:text-[1.03rem]">
                                        L&apos;Ikebana est l&apos;art floral traditionnel japonais. Bien plus qu&apos;une composition décorative, il s&apos;agit d&apos;une discipline artistique et spirituelle fondée sur l&apos;équilibre, l&apos;asymétrie et l&apos;harmonie entre les éléments naturels, le contenant et l&apos;espace environnant.
                                    </p>
                                    <p className="text-base leading-8 md:text-[1.03rem]">
                                        La pratique de l&apos;Ikebana accorde une importance essentielle au vide, au rythme des lignes et à la relation entre les végétaux, en tenant compte des saisons, des formes et des matériaux utilisés.
                                    </p>
                                    <p className="text-base leading-8 md:text-[1.03rem]">
                                        Cette approche se retrouve dans l&apos;ensemble des arts japonais, tels que l&apos;architecture, les jardins, la peinture ou le design, et invite à une observation attentive de la nature ainsi qu&apos;à une pratique empreinte de calme et de concentration.
                                    </p>
                                    <p className="text-base leading-8 md:text-[1.03rem]">
                                        Ce qui distingue l&apos;Ikebana d&apos;une simple décoration, c&apos;est sa forme asymétrique et l&apos;utilisation de l&apos;espace vide comme donnée essentielle de la composition. Autre donnée importante, l&apos;harmonie parmi les matériaux utilisés, le vase et l&apos;emplacement. On retrouve toutes ces caractéristiques dans d&apos;autres formes d&apos;esthétique japonaise, à savoir, la peinture traditionnelle, l&apos;art des jardins, l&apos;architecture ou le design.
                                    </p>
                                </div>
                                <p className="mt-6 text-xs text-[--secondary-color]/65">
                                    Ikebana ateru katachi printemps
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default SchoolInfo;
