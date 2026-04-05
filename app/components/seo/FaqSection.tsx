import Container from "../ui/Container";
import { faqItems } from "@/app/constant/seo/faq";

const shellClass =
    "rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] shadow-[0_24px_70px_rgba(84,52,40,0.08)] backdrop-blur-sm";

const cardClass =
    "rounded-[26px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] p-6 shadow-[0_18px_44px_rgba(84,52,40,0.08)] md:p-7";

const badgeClass =
    "inline-flex rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70";

export default function FaqSection() {
    return (
        <section id="faq" className="w-full bg-[--primary-color] py-14 lg:py-16">
            <Container>
                <div className={shellClass}>
                    <div className="px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
                        <div className="mb-10 max-w-3xl">
                            <span className={`${badgeClass} mb-4`}>FAQ</span>
                            <h2
                                className="text-3xl font-bold text-[--secondary-color] md:text-4xl"
                                style={{ fontFamily: "var(--playfair-display)" }}
                            >
                                FAQ - Ikebana & École Ohara
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-[--secondary-color]/82 md:text-[1.03rem]">
                                Réponses aux questions fréquentes sur l&apos;ikebana, l&apos;École Ohara et les cours.
                            </p>
                        </div>

                        <dl className="grid gap-5 lg:grid-cols-2">
                            {faqItems.map((item, index) => (
                                <div key={item.question} className={cardClass}>
                                    <dt className="flex items-start gap-4 text-[--secondary-color]">
                                        <span
                                            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] border border-white/80 bg-white/85 text-sm font-semibold shadow-[0_10px_24px_rgba(84,52,40,0.08)]"
                                            aria-hidden="true"
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            className="text-xl font-semibold leading-snug md:text-[1.45rem]"
                                            style={{ fontFamily: "var(--playfair-display)" }}
                                        >
                                            {item.question}
                                        </span>
                                    </dt>
                                    <dd className="mt-5 pl-[3.25rem] text-[--secondary-color]/82">
                                        <p className="text-base leading-8 md:text-[1.02rem]">
                                            {item.answer}
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </Container>
        </section>
    );
}
