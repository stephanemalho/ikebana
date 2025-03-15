import { Flower, Users, Baby } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function PricingSection() {
    return (
        <section
            id="tarifs"
            className="w-full py-12 bg-[#f9f5f0] text-[--secondary-color]"
        >
            <div className="container px-4 md:px-6 bg-beige">
                <div className="flex flex-col items-start gap-4 md:gap-8 mb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--secondary-color]">
                        Tarifs
                    </h2>
                    <p className="text-xl text-[--secondary-color]/90 font-[var(--plus-jakarta-sans)]">
                        Tous nos tarifs incluent les fleurs (droit
                        d&apos;adhésion annuelle: +40€)
                    </p>
                </div>

                <Tabs defaultValue="adults" className="w-full lg:min-h-[50px]">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-[white]/80">
                        <TabsTrigger
                            value="adults"
                            className="text-[#4f0b0678] data-[state=active]:bg-[#4f0b06] data-[state=active]:text-white"
                        >
                            Adultes
                        </TabsTrigger>
                        <TabsTrigger
                            value="children"
                            className="text-[#4f0b0678] data-[state=active]:bg-[#4f0b06] data-[state=active]:text-white"
                        >
                            Enfants
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="adults" className="mt-6">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card
                                data-aos="fade-left"
                                className="bg-[white]/10 border-[white]/20 backdrop-blur-sm hover:bg-white/70"
                            >
                                <CardHeader>
                                    <CardTitle className="text-[--secondary-color] flex items-center gap-2">
                                        <Flower className="h-5 w-5" /> Débutant
                                    </CardTitle>
                                    <CardDescription className="text-[--secondary-color]/80">
                                        Pour les nouveaux pratiquants
                                        (jusqu&apos;au 6ème cours)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[--secondary-color]/80">
                                        1 cours
                                    </p>
                                    <div className="text-3xl font-bold text-[--secondary-color] mb-2">
                                        35€
                                    </div>

                                    <Separator className="my-4 bg-[white]/20" />

                                    <p className="text-[--secondary-color]/80">
                                        3 cours
                                    </p>
                                    <div className="relative flex items-center gap-2">
                                        <span className="text-xl text-[--secondary-color]/60 line-through">
                                            105€
                                        </span>{" "}
                                        {/* Prix barré */}
                                        <span className="text-3xl font-bold text-green-600">
                                            85€
                                        </span>{" "}
                                        {/* Prix promo */}
                                        <span className="text-sm bg-red-500 text-white px-2 rounded">
                                            -20€
                                        </span>{" "}
                                        {/* Badge réduction */}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card
                                data-aos="fade-left"
                                className="bg-[white]/10 border-[white]/20 backdrop-blur-sm hover:bg-white/70"
                            >
                                <CardHeader>
                                    <CardTitle className="text-[--secondary-color] flex items-center gap-2">
                                        <Users className="h-5 w-5" />{" "}
                                        Non-Débutant
                                    </CardTitle>
                                    <CardDescription className="text-[--secondary-color]/80">
                                        Pour les pratiquants expérimentés
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[--secondary-color]/80">
                                        1 cours
                                    </p>
                                    <div className="text-3xl font-bold text-[--secondary-color] mb-2">
                                        37€
                                    </div>

                                    <Separator className="my-4 bg-[white]/20" />

                                    <p className="text-[--secondary-color]/80">
                                        3 cours
                                    </p>
                                    <div className="relative flex items-center gap-2">
                                        <span className="text-xl text-[--secondary-color]/60 line-through">
                                            111€
                                        </span>{" "}
                                        {/* Prix barré */}
                                        <span className="text-3xl font-bold text-green-600">
                                            90€
                                        </span>{" "}
                                        {/* Prix promo */}
                                        <span className="text-sm bg-red-500 text-white px-2 rounded">
                                            -21€
                                        </span>{" "}
                                        {/* Badge réduction */}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card
                                data-aos="fade-left"
                                className="bg-[white]/10 border-[white]/20 backdrop-blur-sm hover:bg-white/70"
                            >
                                <CardHeader>
                                    <CardTitle className="text-[--secondary-color] flex items-center gap-2">
                                        <Flower className="h-5 w-5" /> Cours
                                        d&apos;essai
                                    </CardTitle>
                                    <CardDescription className="text-[--secondary-color]/80">
                                        Pour les non adhérents
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[--secondary-color]/80">
                                        1 cours
                                    </p>
                                    <div className="text-3xl font-bold text-[--secondary-color] mb-2">
                                        40€
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="children" className="mt-6">
                        <Card
                            data-aos="fade-right"
                            className="relative bg-[white]/10 border-[white]/20 backdrop-blur-sm hover:bg-white/70"
                        >
                            <Image
                                src="/assets/spring.png"
                                alt="Fleur décorative"
                                width={250} // Ajuste la taille selon besoin
                                height={250}
                                className="absolute top-2 right-2  opacity-80"
                            />
                            <CardHeader>
                                <CardTitle className="text-[--secondary-color] flex items-center gap-2">
                                    <Baby className="h-5 w-5" /> Atelier
                                    d&apos;art floral pour enfants
                                </CardTitle>
                                <CardDescription className="text-[--secondary-color]/80">
                                    Des ateliers d&apos;art floral pour enfants
                                    seront organisés selon les saisons
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                                            Dates et horaires
                                        </h3>
                                        <ul className="space-y-2 text-[--secondary-color]/90">
                                            <li>
                                                L&apos;atelier aura lieu une
                                                fois par mois, le samedi.
                                            </li>
                                            <li>
                                                Il se tiendra de 13h à 13h40 et
                                                chaque participant pourra
                                                assister à un cours de 40
                                                minutes.
                                            </li>
                                            <li>
                                                (Comme les horaires sont adaptés
                                                à ceux des cours de langues, le
                                                début et la fin de chaque cours
                                                dépendront des élèves)
                                            </li>
                                            <li className="font-semibold">
                                                Réservation obligatoire au plus
                                                tard 4 jours avant le cours.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                                            Tarifs (incluant les fleurs)
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[--secondary-color]/80">
                                                    1 cours (adhérent)
                                                </p>
                                                <div className="text-2xl font-bold text-[--secondary-color] mb-1">
                                                    28€
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-[--secondary-color]/80">
                                                    3 cours (adhérent)
                                                </p>
                                                <div className="relative flex items-center gap-2">
                                                    <span className="text-xl text-[--secondary-color]/60 line-through">
                                                        84€
                                                    </span>{" "}
                                                    {/* Prix barré */}
                                                    <span className="text-2xl font-bold text-green-600">
                                                        75€
                                                    </span>{" "}
                                                    {/* Prix promo */}
                                                    <span className="text-sm bg-red-500 text-white px-2 rounded">
                                                        -9€
                                                    </span>{" "}
                                                    {/* Badge réduction */}
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-[--secondary-color]/80">
                                                    1 cours (non adhérent)
                                                </p>
                                                <div className="text-2xl font-bold text-[--secondary-color] mb-1">
                                                    32€
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t border-[white]/20 flex flex-col items-start">
                                <h3 className="text-xl font-semibold mb-2 text-[--secondary-color]">
                                    Professeur
                                </h3>
                                <p className="text-[--secondary-color]/90">
                                    Ikuko Kurenai KATO présidente du chapitre de
                                    l&apos;école Ohara « Yvelines Paris »
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-12 bg-[white]/10 p-6 rounded-lg border border-[white]/20">
                    <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                        Informations importantes
                    </h3>
                    <ul className="space-y-2 text-[--secondary-color]/90">
                        <li>
                            Les participants pourront réserver jusqu&apos;au
                            vendredi de la semaine précédant le cours.
                        </li>
                        <li>
                            Pas de remboursement des frais de matériau en cas
                            d&apos;annulation après 22h.
                        </li>
                        <li>
                            Les changements et autres annulations devront
                            également être communiqués au plus tard le vendredi
                            de la semaine précédant le cours.
                        </li>
                        <li>
                            Aucun remboursement n&apos;est effectué en cas
                            d&apos;annulation le jour même. Cependant, les
                            bouquets pourront être exposés jusqu&apos;au
                            lendemain du cours si vous en émettez le souhait.
                            Veuillez nous prévenir à l&apos;avance.
                        </li>
                        <li>
                            Vous avez la possibilité d&apos;acheter à la
                            réception de notre association les ustensiles
                            d&apos;art floral.
                        </li>
                        <li>
                            Le tarif débutant est valable jusqu&apos;au 6ème
                            cours (il y a des exceptions)
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
