"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Container from "../ui/Container"


export function ContactForm() {
    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici vous pourriez ajouter la logique d&apos;envoi du formulaire
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="w-full py-12 bg-[#f7e5e6]">
            <Container>
                <div className="container px-4 md:px-6 m-auto">
                    <div className="flex flex-col items-start gap-4 md:gap-8 mb-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-[#4f0b06]">
                            En savoir plus
                        </h2>
                    </div>

                    <Card className="overflow-hidden border-none shadow-lg">
                        <div className="flex flex-col md:flex-row">
                            {/* Image section - 1/3 width on desktop */}
                            <div className="hidden md:flex w-full md:w-1/3 relative min-h-[400px] md:min-h-full items-center justify-center p-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/assets/7797779.jpg"
                                        alt="Arrangement Ikebana avec vase vert et fleurs blanches"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Form section - 2/3 width on desktop */}
                            <div className="w-full md:w-2/3 bg-white">
                                <CardHeader className="bg-white">
                                    <CardTitle className="text-2xl font-[var(--playfair-display)] text-[#4f0b06]">
                                        Echangeons ensemble
                                    </CardTitle>
                                    <CardDescription className="text-[#4f0b06]/70">
                                        Ce formulaire vous permet de contacter Ikuko Kato concernant les
                                        cours d&apos;Ikebana.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="email"
                                                className="text-[#4f0b06]"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                required
                                                className="border-[#f0c8d9] focus:border-[#4f0b06] focus:ring-[#4f0b06]"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* <div className="space-y-3">
                                        <Label className="text-[#4f0b06] block mb-2">
                                            Pour quelle cours souhaitez-vous
                                            vous rensigner ?
                                        </Label>
                                        <RadioGroup
                                            defaultValue="paris"
                                            className="flex flex-col space-y-3"
                                            value={formData.location}
                                            onValueChange={handleRadioChange}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="paris"
                                                    id="paris"
                                                    className="text-[#4f0b06]"
                                                />
                                                <Label
                                                    htmlFor="paris"
                                                    className="flex items-center gap-2"
                                                >
                                                    <MapPin className="h-4 w-4 text-[#4f0b06]" />
                                                    Paris 1er
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="yvelines"
                                                    id="yvelines"
                                                    className="text-[#4f0b06]"
                                                />
                                                <Label
                                                    htmlFor="yvelines"
                                                    className="flex items-center gap-2"
                                                >
                                                    <MapPin className="h-4 w-4 text-[#4f0b06]" />
                                                    Yvelines 78
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div> */}

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="message"
                                                className="text-[#4f0b06]"
                                            >
                                                Message (optionnel)
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Votre message ou question..."
                                                className="min-h-[120px] border-[#f0c8d9] focus:border-[#4f0b06] focus:ring-[#4f0b06]"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between border-t border-[#f0c8d9]/30 pt-6">
                                    <div className="text-sm text-[#4f0b06]/70 font-[var(--plus-jakarta-sans)]">
                                        <span className="text-red-500">* </span>{" "}
                                        Tous les champs sont obligatoires sauf
                                        indication contraire
                                    </div>
                                    <Button
                                        onClick={handleSubmit}
                                        className="hero-content__order-button bg-gradient-to-r from-[#b75d71] to-[#b75d71] text-white"
                                    >
                                        <Send className="mr-2 h-4 w-4" /> Envoyer
                                    </Button>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
