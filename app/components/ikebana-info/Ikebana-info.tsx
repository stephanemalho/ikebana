import Container from "../ui/Container"
import { BookOpen, Flower, Leaf, Trees, Eye, Palette, Sprout } from "lucide-react"

function IkebanaInfo() {
    return (
        <section className="py-16 px-2 bg-gradient-to-b from-[var(--background)] to-[var(--primary-color)]">
            <Container>
                <div className="mx-auto p-2">
                    {/* Titre principal */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: "var(--playfair-display)" }}
                        >
                            Qu&apos;est-ce que l&apos;Ikebana ?
                        </h2>
                        <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto"></div>
                    </div>

                    {/* Grille Bento */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Histoire - Grande carte */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[var(--tercary-color)] rounded-full flex items-center justify-center mr-4">
                                    <BookOpen size={22} className="text-[var(--secondary-color)]" aria-hidden />
                                </div>
                                <h3
                                    className="text-2xl font-bold text-[var(--secondary-color)]"
                                    style={{ fontFamily: "var(--Plus_Jakarta_Sans)" }}
                                >
                                    Une Tradition Millénaire
                                </h3>
                            </div>
                            <p
                                className="text-[var(--secondary-color)] leading-relaxed mb-4"
                                style={{ fontFamily: "var(--inter-ikebana)" }}
                            >
                                L&apos;Ikebana, l&apos;un des arts traditionnels du Japon, se pratique depuis plus de <strong>600 ans</strong>. Il
                                tire son origine des premières offrandes de fleurs aux morts dans les rites bouddhistes.
                            </p>
                            <p
                                className="text-[var(--secondary-color)] leading-relaxed"
                                style={{ fontFamily: "var(--inter-ikebana)" }}
                            >
                                Vers le milieu du XVème siècle, l&apos;Ikebana obtint son statut d&apos;art à part entière, indépendant de ses
                                origines religieuses, tout en conservant ses nuances symboliques et philosophiques.
                            </p>
                        </div>

                        {/* Philosophie */}
                        <div className="bg-[var(--tercary-color)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center mb-4">
                                <Flower size={36} className="mx-auto mb-4 text-[var(--secondary-color)]" aria-hidden />
                                <h3
                                    className="text-xl font-bold text-[var(--secondary-color)]"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    Philosophie
                                </h3>
                            </div>
                            <p
                                className="text-[var(--secondary-color)] text-sm leading-relaxed"
                                style={{ fontFamily: "var(--inter-ikebana)" }}
                            >
                                Créer une beauté qui n&apos;existe pas dans la nature, en utilisant l&apos;asymétrie et l&apos;espace vide comme
                                éléments essentiels.
                            </p>
                        </div>

                        {/* Matériaux */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <Leaf size={28} className="mr-3 text-[var(--secondary-color)]" aria-hidden />
                                <h3
                                    className="text-xl font-bold text-[var(--secondary-color)]"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    Matériaux
                                </h3>
                            </div>
                            <ul
                                className="text-[var(--secondary-color)] text-sm space-y-2"
                                style={{ fontFamily: "var(--inter-ikebana)" }}
                            >
                                <li>• Branches et feuilles</li>
                                <li>• Herbes et mousses</li>
                                <li>• Fruits et bourgeons</li>
                                <li>• Feuilles mortes</li>
                            </ul>
                            <p className="text-xs text-[var(--secondary-color)] mt-3 italic">
                                Chaque élément a autant de valeur que les fleurs épanouies
                            </p>
                        </div>

                        {/* École Ohara - Grande carte */}
                        <div className="lg:col-span-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--tercary-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                                    <Trees size={22} className="text-[var(--secondary-color)]" aria-hidden />
                                </div>
                                <h3
                                    className="text-2xl font-bold text-[var(--secondary-color)]"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    L&apos;École Ohara
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4
                                        className="font-semibold text-[var(--secondary-color)] mb-2"
                                        style={{ fontFamily: "var(--inter-ikebana)" }}
                                    >
                                        Style Moribana
                                    </h4>
                                    <p className="text-sm text-[var(--secondary-color)] mb-4">
                                        Utilise des vases plats et peu profonds, parfait pour les arrangements paysagers.
                                    </p>
                                </div>
                                <div>
                                    <h4
                                        className="font-semibold text-[var(--secondary-color)] mb-2"
                                        style={{ fontFamily: "var(--inter-ikebana)" }}
                                    >
                                        Style Heika
                                    </h4>
                                    <p className="text-sm text-[var(--secondary-color)]">
                                        Utilise de hauts vases cylindriques pour des compositions verticales élégantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Apprentissage */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3
                            className="text-3xl font-bold text-[var(--secondary-color)] mb-8 text-center"
                            style={{ fontFamily: "var(--inter-ikebana)" }}
                        >
                            Le Chemin de l&apos;Apprentissage
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--tercary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Eye size={26} className="text-[var(--secondary-color)]" aria-hidden />
                                </div>
                                <h4
                                    className="font-semibold text-[var(--secondary-color)] mb-3"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    Observation
                                </h4>
                                <p className="text-sm text-[var(--secondary-color)] leading-relaxed">
                                    L&apos;observation de la nature est essentielle : changements de saisons, croissance des plantes, beauté de
                                    l&apos;environnement.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--tercary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Palette size={26} className="text-[var(--secondary-color)]" aria-hidden />
                                </div>
                                <h4
                                    className="font-semibold text-[var(--secondary-color)] mb-3"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    Pratique
                                </h4>
                                <p className="text-sm text-[var(--secondary-color)] leading-relaxed">
                                    Maîtrise des arrangements de base avec des matériaux toujours différents pour développer la technique
                                    et la sensibilité.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--tercary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sprout size={26} className="text-[var(--secondary-color)]" aria-hidden />
                                </div>
                                <h4
                                    className="font-semibold text-[var(--secondary-color)] mb-3"
                                    style={{ fontFamily: "var(--inter-ikebana)" }}
                                >
                                    Évolution
                                </h4>
                                <p className="text-sm text-[var(--secondary-color)] leading-relaxed">
                                    Perfectionnement progressif vers des styles traditionnels et libres, guidé par les critiques
                                    constructives du maître.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Citation finale */}
                    <div className="mt-12 text-center">
                        <blockquote
                            className="text-xl md:text-2xl text-[var(--secondary-color)] italic max-w-3xl mx-auto"
                            style={{ fontFamily: "var(--inter-ikebana)" }}
                        >
                            &quot;Ce qui distingue l&apos;Ikebana d&apos;une simple décoration, c&apos;est sa forme asymétrique et l&apos;utilisation de
                            l&apos;espace vide comme donnée essentielle de la composition.&quot;
                        </blockquote>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default IkebanaInfo
