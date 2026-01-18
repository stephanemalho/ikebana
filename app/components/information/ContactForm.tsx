"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Container from "../ui/Container";

export function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: "",
        email: "",
        message: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_z1ntc35",      
                "template_xjwfrb9",    
                formData,             
                "_8_azjNu5cTrRHJuw"        
            );

            alert("Message envoyé !");
            setFormData({ from_name: "", email: "", message: "" });

        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'envoi.");
        }
    };

    return (
        <section id="contact" className="w-full py-12 bg-[--primary-color]">
            <Container>
                <div className="container px-4 md:px-6 m-auto">
                    <div className="flex flex-col items-start gap-4 md:gap-8 mb-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4f0b06]" style={{ fontFamily: "var(--playfair-display)" }}>
                            En savoir plus
                        </h2>
                    </div>

                    <Card className="overflow-hidden border-none shadow-lg">
                        <div className="flex flex-col md:flex-row">

                            <div className="hidden md:flex w-full md:w-1/3 relative min-h-[400px] md:min-h-full items-center justify-center p-6">
                                <div className="relative w-full h-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/ikuko/ikuko-kato-sama.webp"
                                        alt="Arrangement Ikebana"
                                        fill
                                        className="object-contain image-soft-filter"
                                    />
                                    <div className="absolute inset-0 image-overlay" />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 bg-white">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-[var(--inter-ikebana)] text-[#4f0b06]">
                                        Échangeons ensemble
                                    </CardTitle>
                                    <CardDescription className="text-[#4f0b06]/70">
                                        Ce formulaire vous permet de contacter Ikuko Kato.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        <div className="space-y-2">
                                            <Label htmlFor="from_name" className="text-[#4f0b06]">Nom</Label>
                                            <Input
                                                id="from_name"
                                                name="from_name"
                                                type="text"
                                                placeholder="Votre nom"
                                                required
                                                className="border-[#f0c8d9] focus:border-[#4f0b06] focus:ring-[#4f0b06]"
                                                value={formData.from_name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-[#4f0b06]">Email</Label>
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

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-[#4f0b06]">Message (optionnel)</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Votre message ou question..."
                                                className="min-h-[120px] border-[#f0c8d9] focus:border-[#4f0b06] focus:ring-[#4f0b06]"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="hero-content__order-button bg-gradient-to-r from-[#b75d71] to-[#b75d71] text-white"
                                        >
                                            <Send className="mr-2 h-4 w-4" /> Envoyer
                                        </Button>

                                    </form>
                                </CardContent>
                            </div>

                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
