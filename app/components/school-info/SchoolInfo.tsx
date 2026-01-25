import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const SchoolInfo = () => {
    return (
        <section
            id="nos-sites"
            className="
    pb-16 
    bg-gradient-to-b
    from-[--primary-color]
    via-[--primary-color]/60
    to-transparent
    "
        >

            <div className="mx-auto space-y-12  bg-gradient-to-b
    from-[#675247]
    to-transparent py-8 md:rounded-lg">
                {/* École Ohara */}
                <div className="bg-[--primary-color] md:mx-2 py-8 px-6 md:rounded-lg">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Image
                            src="/images/ohara/logo-ohara-officiel.png"
                            alt="Logo officiel de l'École Ohara au Japon"
                            width={48}
                            height={48}
                            className="object-contain"
                            priority
                        />

                        <h2
                            id="ecole-ohara"
                            className="text-2xl font-bold text-[--secondary-color] text-center"
                            style={{ fontFamily: "var(--playfair-display)" }}
                        >
                            Qu'est-ce que l'École Ohara
                        </h2>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Présentation Générale
                        </h3>
                        <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <a href="https://www.ohararyu.or.jp/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 md:order-2 hover:scale-105 transition-transform">
                                    <figure>
                                        <img
                                            src="/images/ohara/unshin-ohara-portrait.webp"
                                            alt="Portrait de Unshin Ohara fondateur de l'école Ohara d'Ikebana"
                                            className="h-[130px] object-cover m-auto"
                                        />
                                        <figcaption className="mt-2 text-xs md:text-sm text-black text-center">
                                            Portrait ancien de Unshin Ohara.<br />&copy; Ohararyu All rights reserved
                                        </figcaption>
                                    </figure>
                                </a>
                                <div className="w-full md:w-2/3 md:order-1 space-y-4">
                                    <p>
                                        L&apos;école Ohara <Link className="hover:underline" href="https://www.ohararyu.or.jp/" target="_blank" ><strong>(小原流, Ohara-ryū)</strong></Link> est l&apos;une des plus grandes écoles d&apos;Ikebana au Japon.
                                        Elle a été fondée à Tokyo à la fin du XIXᵉ siècle (vers 1895), durant l&apos;époque Meiji <strong>(明治時代,Meiji jidai)</strong>, par <strong>Unshin Ohara</strong>.
                                    </p><p>
                                        Contrairement aux écoles plus anciennes comme Ikenobō, dont la pratique est très codifiée et cérémoniale, l&apos;école Ohara propose une approche naturaliste, expressive et contemporaine.
                                        Elle a joué un rôle essentiel dans l&apos;évolution de l&apos;Ikebana en introduisant de nouvelles formes, comme le moribana, inspirées des paysages naturels.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Historique */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Historique
                        </h3>
                        <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <a href="https://www.ohararyu.or.jp/about/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 md:order-2 hover:scale-105 transition-transform">
                                    <figure>
                                        <img
                                            src="/images/ohara/ikebana-historical-unshin-ohara.webp"
                                            alt="arrangement historique de Unshin Ohara"
                                            className="w-full h-[260px] rounded-md object-cover"
                                        />
                                        <figcaption className="mt-2 text-xs md:text-sm text-black">
                                            Une des compositions historiques de Unshin Ohara.<br />&copy; Ohararyu All rights reserved
                                        </figcaption>
                                    </figure>
                                </a>
                                <div className="w-full md:w-2/3 md:order-2 space-y-4">
                                    <p className="leading-relaxed">
                                        Unshin Ohara a fondé l&apos;école qui porte son nom en 1895, au moment où le Japon s&apos;ouvrait à l&apos;Occident. Il a fondé le style Moribana, lequel débouchera plus tard sur l&apos;arrangement paysagiste. C&apos;est aussi lui qui dessinait et produisait les vases larges et peu profonds qui conviennent parfaitement à l&apos;Ikebana du style Moribana.
                                    </p>
                                    <p className="leading-relaxed">
                                        Il y a deux formes d&apos;Ikebana dans l&apos;école Ohara : le style <strong>Moribana</strong> qui utilise ces vases plats et peu profonds, et le style <strong>Héika</strong> qui utilise de hauts vases cylindriques. Les débutants doivent apprendre à maîtriser un certain nombre d&apos;arrangements de base dans ces deux styles en composant des matériaux toujours différents.
                                    </p>
                                    <p className="leading-relaxed">
                                        En 1995, l&apos;école Ohara a fêté son centenaire. Le premier maître fondateur, <strong>Unshin Ohara</strong> a créé le style <strong>Moribana</strong>. Son successeur, <strong>Koun Ohara</strong> a défini les règles du style <strong>Moribana</strong>. Le troisième grand maître, <strong>Houn Ohara</strong> a enrichi les motifs grâce aux références à la littérature, créant ainsi les styles <strong>Bunjin</strong> et <strong>Rinpa</strong>. Le quatrième grand maître <strong>Natsuki Ohara</strong> a développé de nouvelles formes modernes, <strong>Hana-mai</strong> et <strong>Hana-isho</strong>.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Aujourd&apos;hui */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Aujourd&apos;hui
                        </h3>
                        <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <a href="https://www.ohararyu.or.jp/about/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 md:order-2 hover:scale-105 transition-transform">
                                    <figure>
                                        <img
                                            src="/images/ohara/hiroki-ohara-portrait.webp"
                                            alt="arrangement historique de Unshin Ohara"
                                            className="w-full h-auto rounded-md object-cover"
                                        />
                                        <figcaption className="mt-2 text-xs md:text-sm text-black">
                                            Une des compositions historiques de Unshin Ohara.<br />&copy; Ohararyu All rights reserved
                                        </figcaption>
                                    </figure>
                                </a>
                                <div className="w-full md:w-2/3 md:order-1 space-y-4">
                                    <p className="leading-relaxed">
                                        Aujourd'hui, l'École Ohara poursuit son développement sous la direction de
                                        <strong> Hiroki Ohara</strong>, cinquième Iemoto. Héritier d'une tradition plus que centenaire,
                                        il continue d'enrichir l'ikebana en l'inscrivant dans le monde contemporain.
                                        En 2011, il crée le style <strong>Hana-kanade</strong>, une expression moderne qui met en valeur
                                        la tension des lignes et le dialogue subtil entre les végétaux.
                                    </p>

                                    <p className="leading-relaxed">
                                        Forte de cette vision, l'École Ohara rayonne aujourd'hui bien au-delà du Japon.
                                        Elle dispose de bureaux à Tokyo et à Osaka, de <strong>146 chapitres au Japon</strong> et de
                                        plus de <strong>100 chapitres à l'international</strong>, rassemblant plusieurs
                                        <strong> centaines de milliers de pratiquants</strong> à travers le monde.
                                    </p>

                                    <div className="mt-6 pt-4 border-t-2 border-[--secondary-color]/20 border-dashed">
                                        <h4 className="text-xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                                            Une transmission officielle en France
                                        </h4>

                                        <p className="leading-relaxed">
                                            C'est dans cette continuité que s'inscrit l'
                                            <strong>École Ohara - Chapitre Yvelines-Paris</strong>, créée en 2019 avec
                                            l'approbation directe du Iemoto <strong>Hiroki Ohara</strong>.
                                            Elle constitue un lien vivant entre la tradition japonaise et la pratique
                                            de l'ikebana en France.
                                        </p>

                                        <p className="leading-relaxed">
                                            À travers nos cours, nous transmettons bien plus qu'une technique florale :
                                            nous invitons à découvrir la culture japonaise, ses valeurs, son rapport à la
                                            nature et à l'espace. L'ikebana devient alors un chemin de sensibilité,
                                            d'observation et de création personnelle.
                                        </p>

                                        <p className="font-semibold my-4">
                                            Notre engagement est de partager un ikebana fidèle à l'esprit de l'École Ohara,
                                            accessible à tous, dans le respect de son enseignement officiel.
                                        </p>
                                    </div>

                                    <p className="leading-relaxed">
                                        Rejoindre le Chapitre Yvelines-Paris, c'est intégrer une école reconnue
                                        internationalement tout en pratiquant l'ikebana dans un cadre local,
                                        bienveillant et authentique.
                                    </p>

                                    <div className="text-center mt-6 pt-4 border-t-2 border-[--secondary-color]/20 border-dashed">
                                        <Link href="#tenri" className="font-semibold text-sm hover:underline">
                                            S'inscrire aux cours d'ikebana - École Ohara Yvelines-Paris et devenir membre de l'École Ohara
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Chapitre Yvelines-Paris */}
                    <div className="border-t border-dashed border-[--secondary-color]/20 pt-6">
                        <h3 className="text-xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            École Ohara Chapitre Yvelines-Paris
                        </h3>
                        <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/*  */}
                                <figure className="w-full md:w-1/3 md:order-2">
                                    <img
                                        src="/images/ikebana-creation/moribana-chokuritsu-kei-ete.webp"
                                        alt="Arrangement ikebana moribana"
                                        className="w-full h-auto rounded-md object-cover"
                                    />
                                    <figcaption className="mt-2 text-xs md:text-sm text-black">
                                        Moribana chokuritsu kei été
                                    </figcaption>
                                </figure>
                                <div className="w-full md:w-2/3 md:order-1 space-y-4">
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
                            </div>
                        </Card>
                    </div>
                </div>
                {/* Nos Activités */}
                <div className="bg-[--primary-color] md:mx-2 py-8 px-6 md:rounded-lg">
                    <h2 id="nos-activites" className="text-2xl text-center font-bold text-[var(--secondary-color)] mb-6"
                        style={{ fontFamily: 'var(--playfair-display)' }}>
                        Nos Activités
                    </h2>
                    <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <figure className="w-full md:w-1/3 md:order-2">
                                <img
                                    src="/assets/ikuko_kato.webp"
                                    alt="Atelier d&apos;Ikebana et composition"
                                    className="w-full h-auto rounded-md object-cover"
                                />
                                <figcaption className="mt-2 text-xs md:text-sm text-black">
                                    La Présidente Ikuko KATO Kurenaï durant un évènement culturel.
                                </figcaption>
                            </figure>
                            <div className="w-full md:w-2/3 md:order-1 space-y-4">
                                <p
                                    className="text-lg text-[--secondary-color] leading-relaxed"
                                    style={{ fontFamily: 'var(--inter-ikebana)' }}
                                >
                                    L'École Ikebana Ohara chapitre Yvelines - Paris, propose des activités culturelles et pédagogiques autour de l'art floral japonais,
                                    accessibles aux débutants comme aux pratiquants plus avancés.
                                    <br /><br />
                                    Nos actions s'articulent autour de cours réguliers, d'ateliers thématiques et de temps de transmission
                                    dédiés à la découverte de l'Ikebana dans le respect de la tradition Ohara.
                                    <br /><br />
                                    L'association organise également des rencontres culturelles, des démonstrations publiques
                                    et des projets collectifs visant à faire connaître l'esthétique japonaise,
                                    sa philosophie et son lien étroit avec la nature et les saisons.
                                </p>

                                <p className="text-lg text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                                    Nous organisons une exposition florale annuelle, des ateliers saisonniers, des ateliers avec des maîtres déplacés de l&apos;École Ohara au Japon, des voyages au Japon.
                                </p>
                                <div className="text-center mt-6 pt-4 border-t-2 border-[--secondary-color]/20 border-dashed">
                                    <p className="font-semibold text-lg">
                                        Présidente KATO Kurenaï <span className="font-medium">加藤 紅</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* L&apos;Ikebana */}
                <div className="bg-[--primary-color] md:mx-2 py-8 px-6 md:rounded-lg">
                    <h2 id="ikebana" className="text-2xl text-center font-bold text-[var(--secondary-color)] mb-6"
                        style={{ fontFamily: 'var(--playfair-display)' }}>
                        L&apos;Ikebana
                    </h2>
                    <Card className="text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <figure className="w-full md:w-1/3 md:order-2">
                                <img
                                    src="/images/ikebana-creation/shikisai-moribana-youshiki-honi.webp"
                                    alt="Ikebana composition shikisai moribana"
                                    className="w-full h-auto rounded-md object-cover"
                                />
                                <figcaption className="mt-2 text-xs md:text-sm text-black">
                                    Shikisai moribana youshiki honi
                                </figcaption>
                            </figure>
                            <div className="w-full md:w-2/3 md:order-1 space-y-4">
                                <p
                                    className="text-lg text-center text-[--secondary-color] leading-relaxed"
                                    style={{ fontFamily: 'var(--inter-ikebana)' }}
                                >
                                    L'Ikebana est l'art floral traditionnel japonais. Bien plus qu'une composition décorative,
                                    il s'agit d'une discipline artistique et spirituelle fondée sur l'équilibre,
                                    l'asymétrie et l'harmonie entre les éléments naturels, le contenant et l'espace environnant.
                                    <br /><br />
                                    La pratique de l'Ikebana accorde une importance essentielle au vide,
                                    au rythme des lignes et à la relation entre les végétaux,
                                    en tenant compte des saisons, des formes et des matériaux utilisés.
                                    <br /><br />
                                    Cette approche se retrouve dans l'ensemble des arts japonais,
                                    tels que l'architecture, les jardins, la peinture ou le design,
                                    et invite à une observation attentive de la nature
                                    ainsi qu'à une pratique empreinte de calme et de concentration.
                                </p>
                                <p className="text-lg text-center text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                                    Ce qui distingue l&apos;Ikebana d&apos;une simple décoration, c&apos;est sa forme asymétrique et l&apos;utilisation de l&apos;espace vide comme donnée essentielle de la composition. Autre donnée importante, l&apos;harmonie parmi les matériaux utilisés, le vase et l&apos;emplacement. On retrouve toutes ces caractéristiques dans d&apos;autres formes d&apos;esthétique japonaise, à savoir, la peinture traditionnelle, l&apos;art des jardins, l&apos;architecture ou le design.

                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default SchoolInfo;
