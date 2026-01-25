import Container from "../ui/Container";
import { faqItems } from "@/app/constant/seo/faq";

export default function FaqSection() {
    return (
        <section id="faq" className="w-full py-16 bg-[--primary-color]">
            <Container>
                <div className="px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[--secondary-color]" style={{ fontFamily: "var(--playfair-display)" }}>
                            FAQ - Ikebana & École Ohara
                        </h2>
                        <p className="text-lg text-[--secondary-color]/80 mt-3">
                            Réponses aux questions fréquentes sur l'ikebana, l'École Ohara et les cours.
                        </p>
                    </div>

                    <dl className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.question} className="bg-white rounded-lg p-6 border border-[--secondary-color]/10">
                                <dt className="text-xl font-semibold text-[--secondary-color]">{item.question}</dt>
                                <dd className="text-[--secondary-color]/90 mt-2 leading-relaxed">{item.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
