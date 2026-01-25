import Image from "next/image";
import { ListChecks, ShieldCheck, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Container from "../ui/Container";

export function ContactForm() {
    return (
        <section id="contact" className="w-full py-12 bg-[--primary-color]">
            <Container>
                <div className="container px-4 md:px-6 m-auto">
                    <div className="flex flex-col items-start gap-8 mb-10">
                        <div className="grid gap-6">
                            <h2 className="text-2xl font-bold text-[#4f0b06]" style={{ fontFamily: "var(--playfair-display)" }}>
                                Formulaire de contact direct avec Ikuko Kato
                            </h2>
                            <p className="text-sm md:text-base text-[--secondary-color] font-[var(--inter-ikebana)]">Quelques questions pour mieux comprendre votre demande avant de vous répondre.
                            </p>
                        </div>
                        <Card className="bg-muted m-auto">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl md:text-2xl font-semibold">Échangeons ensemble avant de prendre rendez-vous</h3>
                                <p className="text-sm md:text-base text-[--secondary-color]">
                                    Ce formulaire permet de prendre un premier contact et de préciser votre besoin.
                                    <br />
                                    <span className="text-sm italic text-[--secondary-color]">
                                        (réponse personnalisée, sans engagement)
                                    </span>
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-2">
                                        <ListChecks className="h-4 w-4 text-green-800" aria-hidden="true" />
                                        <span className="text-sm text-[--secondary-color]">
                                            Formulaire simple à remplir (2-3 minutes)
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <ShieldCheck className="h-4 w-4 text-blue-500" aria-hidden="true" />
                                        <span className="text-sm text-[--secondary-color]">
                                            Les informations restent strictement confidentielles
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-4 w-4 text-yellow-800" aria-hidden="true" />
                                        <span className="text-sm text-[--secondary-color]">
                                            Une réponse vous sera apportée dans les meilleurs délais
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
                                    <div className="relative w-40 aspect-square my-4">
                                        <Image
                                            src="/assets/qr_code_to_google_contact_form.svg"
                                            alt="QR code pour contacter Exotic Perle Teckel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScZOzJG56HlUbwWEgHSKUgK6oPzi36LwUS4SQHhg_oC8kN-MA/viewform?usp=dialog" className="hero-content__cta-button">Accéder au formulaire
                                        </a>
                                        <span className="text-sm italic text-[--secondary-color]">Vous recevrez un exemplaire par mail</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </Container>
        </section >
    );
}
