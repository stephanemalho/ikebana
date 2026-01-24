import Link from "next/link";
import Container from "../ui/Container";

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
                    <h2 className="text-3xl font-bold text-[--secondary-color] mb-16 text-center" style={{ fontFamily: 'var(--playfair-display)' }}>
                        Qu'est ce que de l&apos;École Ohara
                    </h2>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Présentation Générale
                        </h3>
                        <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <p>
                                L&apos;école Ohara <Link className="hover:underline" href="https://www.ohararyu.or.jp/" target="_blank" ><strong>(小原流, Ohara-ryū)</strong></Link> est l&apos;une des plus grandes écoles d&apos;Ikebana au Japon.
                                Elle a été fondée à Tokyo à la fin du XIXᵉ siècle (vers 1895), durant l&apos;époque Meiji <strong>(明治時代,Meiji jidai)</strong>, par <strong>Unshin Ohara</strong>.
                            </p><p>
                                Contrairement aux écoles plus anciennes comme Ikenobō, dont la pratique est très codifiée et cérémoniale, l&apos;école Ohara propose une approche naturaliste, expressive et contemporaine.
                                Elle a joué un rôle essentiel dans l&apos;évolution de l&apos;Ikebana en introduisant de nouvelles formes, comme le moribana, inspirées des paysages naturels.
                            </p>
                        </div>
                    </div>

                    {/* Historique */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Historique
                        </h3>
                        <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
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

                    {/* Aujourd&apos;hui */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            Aujourd&apos;hui
                        </h3>
                        <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <p className="leading-relaxed">
                                Aujourd&apos;hui, l&apos;école continue de prospérer sous la direction d&apos;<strong>Hiroki Ohara</strong>, actuel et cinquième Iemoto. En 2011, <strong>Hiroki Ohara</strong> a créé le style <strong>Hana-kanade</strong>, une nouvelle expression soulignant la beauté des lignes croisées des tiges principales, en harmonie avec le style de vie contemporain.
                            </p>
                            <p className="leading-relaxed">
                                L&apos;école Ohara possède des bureaux à Tokyo et à Osaka avec 146 chapitres au Japon et plus de 100 chapitres internationaux avec un total de plus de <strong>300 000 membres</strong> dans le monde.
                            </p>
                            <div className="text-center mt-6 pt-4 border-t border-[--secondary-color]/20">
                                <Link href="#tenri" className="font-semibold text-lg hover:underline">
                                    Inscrivez vous pour devenir membre de l&apos;École Ohara
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Chapitre Yvelines-Paris */}
                    <div className="border-t border-dashed border-[--secondary-color]/20 pt-6">
                        <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4 md:text-left text-center">
                            École Ohara Chapitre Yvelines-Paris
                        </h3>
                        <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            <p className="leading-relaxed">
                                <strong>L&apos;École Ohara chapitre Yvelines-Paris</strong> a été créée en 2019 avec l&apos;approbation du Iemoto <strong>Hiroki Ohara</strong>. Nous sommes actifs et impliqués depuis.
                            </p>
                            <p className="leading-relaxed">
                                Grâce à l&apos;Ikebana, nous souhaitons étudier la culture, les coutumes, les habitudes et l&apos;histoire japonaise, nous souhaitons ressentir le lien entre l&apos;homme et la nature.
                            </p>
                            <p className="leading-relaxed font-semibold">
                                Nous sommes convaincus que notre mission est de transmettre l&apos;ikebana authentique de l&apos;école Ohara.
                            </p>
                            <div className="text-center mt-6 pt-4 border-t border-[--secondary-color]/20">
                                <p className="font-semibold text-lg">
                                    Présidente KATO Kurenaï <span className="font-medium">加藤 紅</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nos Activités */}
                <div className="bg-[--primary-color] md:mx-2 py-8 px-6 md:rounded-lg">
                    <h2 className="text-3xl text-center font-bold text-[var(--secondary-color)] mb-6"
                        style={{ fontFamily: 'var(--playfair-display)' }}>
                        Nos Activités
                    </h2>
                    <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
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
                    </div>
                </div>

                {/* L&apos;Ikebana */}
                <div className="bg-[--primary-color] md:mx-2 py-8 px-6 md:rounded-lg">
                    <h2 className="text-3xl text-center font-bold text-[var(--secondary-color)] mb-6"
                        style={{ fontFamily: 'var(--playfair-display)' }}>
                        L&apos;Ikebana
                    </h2>
                    <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
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

            </div>
        </section>
    );
};

export default SchoolInfo;