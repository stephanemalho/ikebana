import React from 'react';
import Container from '../ui/Container';

const SchoolInfo = () => {
    return (
        <section className="py-16 bg-[--primary-color]">
            <Container>
                <div className="mx-auto space-y-12 bg-white p-8 md:rounded-lg">
                    {/* Nos Activités */}
                    <div data-aos="fade-up" className="text-center mb-24">
                        <h2 className="text-4xl text-center md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: "var(--playfair-display)" }}>
                            Nos Activités
                        </h2>
                        <p className="text-lg text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            Nous organisons une exposition florale annuelle, des ateliers saisonniers, des ateliers avec des maîtres déplacés de l'École Ohara au Japon, des voyages au Japon.
                        </p>
                    </div>

                    {/* L'Ikebana */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-4xl text-center md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: "var(--playfair-display)" }}>
                            L'Ikebana
                        </h2>
                        <p className="text-lg text-center text-[--secondary-color] leading-relaxed" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                            Ce qui distingue l'Ikebana d'une simple décoration, c'est sa forme asymétrique et l'utilisation de l'espace vide comme donnée essentielle de la composition. Autre donnée importante, l'harmonie parmi les matériaux utilisés, le vase et l'emplacement. On retrouve toutes ces caractéristiques dans d'autres formes d'esthétique japonaise, à savoir, la peinture traditionnelle, l'art des jardins, l'architecture ou le design.
                        </p>
                    </div>

                    {/* École Ohara */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-[--tercary-color] p-8 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--secondary-color] mb-8 text-center" style={{ fontFamily: "var(--playfair-display)" }}>
                            Présentation de l'École Ohara
                        </h2>

                        {/* Historique */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4">
                                Historique
                            </h3>
                            <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                                <p className="leading-relaxed">
                                    Unshin Ohara a fondé l'école qui porte son nom en 1895, au moment où le Japon s'ouvrait à l'Occident. Il a fondé le style Moribana, lequel débouchera plus tard sur l'arrangement paysagiste. C'est aussi lui qui dessinait et produisait les vases larges et peu profonds qui conviennent parfaitement à l'Ikebana du style Moribana.
                                </p>
                                <p className="leading-relaxed">
                                    Il y a deux formes d'Ikebana dans l'école Ohara : le style <strong>Moribana</strong> qui utilise ces vases plats et peu profonds, et le style <strong>Héika</strong> qui utilise de hauts vases cylindriques. Les débutants doivent apprendre à maîtriser un certain nombre d'arrangements de base dans ces deux styles en composant des matériaux toujours différents.
                                </p>
                                <p className="leading-relaxed">
                                    En 1995, l'école Ohara a fêté son centenaire. Le premier maître fondateur, Unshin Ohara a créé le style Moribana. Son successeur, Koun Ohara a défini les règles du style Moribana. Le troisième grand maître, Houn Ohara a enrichi les motifs grâce aux références à la littérature, créant ainsi les styles Bunjin et Rinpa. Le quatrième grand maître Natsuki Ohara a développé de nouvelles formes modernes, Hana-mai et Hana-isho.
                                </p>
                            </div>
                        </div>

                        {/* Aujourd'hui */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[--secondary-color] mb-4" >
                                Aujourd'hui
                            </h3>
                            <div className="space-y-4 text-[--secondary-color] bg-white p-4 rounded-md" style={{ fontFamily: 'var(--inter-ikebana)' }}>
                                <p className="leading-relaxed">
                                    Aujourd'hui, l'école continue de prospérer sous la direction d'<strong>Hiroki Ohara</strong>, actuel et cinquième Iemoto. En 2011, Hiroki Ohara a créé le style <strong>Hana-kanade</strong>, une nouvelle expression soulignant la beauté des lignes croisées des tiges principales, en harmonie avec le style de vie contemporain.
                                </p>
                                <p className="leading-relaxed">
                                    L'école Ohara possède des bureaux à Tokyo et à Osaka avec 146 chapitres au Japon et plus de 100 chapitres internationaux avec un total de plus de <strong>300 000 membres dans le monde</strong>.
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
                                    L'École Ohara chapitre Yvelines-Paris a été créée en 2019 avec l'approbation du Iemoto Hiroki Ohara. Nous sommes actifs et impliqués depuis.
                                </p>
                                <p className="leading-relaxed">
                                    Grâce à l'Ikebana, nous souhaitons étudier la culture, les coutumes, les habitudes et l'histoire japonaise, nous souhaitons ressentir le lien entre l'homme et la nature.
                                </p>
                                <p className="leading-relaxed font-semibold">
                                    Nous sommes convaincus que notre mission est de transmettre l'ikebana authentique de l'école Ohara.
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