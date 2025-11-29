import React from "react";
import Container from "../ui/Container";

const SchoolInfo = () => {
    return (
        <section className="py-16 bg-[--primary-color]">
            <Container>
                <div className="mx-auto space-y-12 bg-white p-8 md:rounded-lg">
                    {/* Nos Activités */}
                    <div data-aos="fade-up" className="text-center mb-24">
                        <h2 className="text-4xl text-center md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: 'var(--playfair-display)' }}>
                            Nos Activités
                        </h2>
                        <p className="text-lg text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            Nous organisons une exposition florale annuelle, des ateliers saisonniers, des ateliers avec des maîtres déplacés de l&apos;École Ohara au Japon, des voyages au Japon.
                        </p>
                    </div>

                    {/* L&apos;Ikebana */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-4xl text-center md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: 'var(--playfair-display)' }}>
                            L&apos;Ikebana
                        </h2>
                        <p className="text-lg text-center text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            Ce qui distingue l&apos;Ikebana d&apos;une simple décoration, c&apos;est sa forme asymétrique et l&apos;utilisation de l&apos;espace vide comme donnée essentielle de la composition. Autre donnée importante, l&apos;harmonie parmi les matériaux utilisés, le vase et l&apos;emplacement. On retrouve toutes ces caractéristiques dans d&apos;autres formes d&apos;esthétique japonaise, à savoir, la peinture traditionnelle, l&apos;art des jardins, l&apos;architecture ou le design.
                        </p>
                    </div>

                    {/* École Ohara */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-[#e6dcdb] p-8 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--secondary-color] mb-8 text-center" style={{ fontFamily: 'var(--playfair-display)' }}>
                            Présentation de l&apos;École Ohara
                        </h2>

                        {/* Historique */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4">
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
                            <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4" >
                                Aujourd&apos;hui
                            </h3>
                            <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                                <p className="leading-relaxed">
                                    Aujourd&apos;hui, l&apos;école continue de prospérer sous la direction d&apos;<strong>Hiroki Ohara</strong>, actuel et cinquième Iemoto. En 2011, <strong>Hiroki Ohara</strong> a créé le style <strong>Hana-kanade</strong>, une nouvelle expression soulignant la beauté des lignes croisées des tiges principales, en harmonie avec le style de vie contemporain.
                                </p>
                                <p className="leading-relaxed">
                                    L&apos;école Ohara possède des bureaux à Tokyo et à Osaka avec 146 chapitres au Japon et plus de 100 chapitres internationaux avec un total de plus de <strong>300 000 membres</strong> dans le monde.
                                </p>
                            </div>
                        </div>

                        {/* Chapitre Yvelines-Paris */}
                        <div className="border-t border-dashed border-[--secondary-color]/20 pt-6">
                            <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4" >
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
                </div>
            </Container>
        </section>
    );
};

export default SchoolInfo;