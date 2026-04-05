import Image from "next/image";
import CarouselMainTitle from "./IkebanaTitle";
import type { carouselMetadataType } from "./carouselConfig";

type CarouselRevealProps = {
    carouselData: carouselMetadataType;
};

function CarouselReveal({ carouselData }: CarouselRevealProps) {
    const [featuredItem, ...galleryItems] = carouselData.items;

    return (
        <section className="w-full space-y-8" aria-labelledby={carouselData.id}>
            <CarouselMainTitle
                id={carouselData.id}
                title={carouselData.title}
                description={carouselData.description}
            />

            <div className="overflow-hidden rounded-[28px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f7ece6_100%)] shadow-[0_18px_48px_rgba(84,52,40,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.9fr)]">
                    <figure className="relative min-h-[340px] lg:min-h-[520px]">
                        <Image
                            src={featuredItem.imageUrl}
                            alt={featuredItem.altText}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1023px) 100vw, 58vw"
                        />
                    </figure>

                    <div className="flex flex-col justify-between gap-6 p-6 md:p-8 text-[--secondary-color]">
                        <div className="space-y-4">
                            <span className="inline-flex w-fit rounded-sm border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[--secondary-color]/70">
                                Selection
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--playfair-display)" }}>
                                {featuredItem.title}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                {featuredItem.description}
                            </p>
                        </div>

                        <figcaption className="border-t border-[--secondary-color]/10 pt-4 text-sm text-[--secondary-color]/75">
                            {featuredItem.altText}
                        </figcaption>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-1">
                <p className="text-sm text-[--secondary-color]/70">
                    Faites défiler pour explorer la galerie.
                </p>
                <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-[--secondary-color]/45 md:block">
                    {carouselData.items.length} visuels
                </p>
            </div>

            <ul className="modern-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4" aria-label={carouselData.title}>
                {galleryItems.map((item, index) => (
                    <li key={`${carouselData.id}-${item.title}-${index}`} className="min-w-[18rem] flex-[0_0_18rem] snap-start md:min-w-[21rem] md:flex-[0_0_21rem]">
                        <article className="h-full overflow-hidden rounded-[24px] border border-[#ead9d1] bg-[linear-gradient(180deg,#fffdfa_0%,#f9f0ea_100%)] shadow-[0_14px_36px_rgba(84,52,40,0.08)] transition-transform duration-300 hover:-translate-y-1">
                            <figure className="flex h-full flex-col">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.altText}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 72vw, 336px"
                                    />
                                </div>
                                <figcaption className="flex flex-1 flex-col gap-3 p-5 text-[--secondary-color]">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--playfair-display)" }}>
                                            {item.title}
                                        </h3>
                                        <span className="shrink-0 rounded-sm bg-[--primary-color] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[--secondary-color]/65">
                                            {String(index + 2).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-[--secondary-color]/80">
                                        {item.description}
                                    </p>
                                </figcaption>
                            </figure>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CarouselReveal;
