"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CarouselMainTitle from "./IkebanaTitle";
import type { carouselMetadataType } from "./carouselConfig";

const IkebanaCarousel = dynamic(() => import("./IkebanaCarousel"), { ssr: false });

type CarouselRevealProps = {
    carouselData: carouselMetadataType;
    height?: number;
    mobileMaxItems?: number;
};

const MOBILE_QUERY = "(max-width: 1023px)";

function CarouselReveal({ carouselData, height, mobileMaxItems = 5 }: CarouselRevealProps) {
    const [showCarousel, setShowCarousel] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    const previewItem = carouselData.items[0];
    const maxItems = useMemo(() => (isMobile ? mobileMaxItems : undefined), [isMobile, mobileMaxItems]);

    return (
        <div className="w-full">
            <CarouselMainTitle id={carouselData.id} title={carouselData.title} description={carouselData.description} />

            {!showCarousel ? (
                <div className="w-full flex flex-col items-center">
                    <figure className="relative w-full max-w-4xl h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src={previewItem.imageUrl}
                            alt={previewItem.altText}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1023px) 100vw, 900px"
                        />
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
                            <h3 className="text-xl font-bold mb-2 text-center">{previewItem.title}</h3>
                            <p className="text-sm text-center">{previewItem.description}</p>
                        </div>
                    </figure>
                    <button
                        type="button"
                        className="mt-6 underline text-[--secondary-color] hover:text-black"
                        onClick={() => setShowCarousel(true)}
                    >
                        {carouselData.seeMoreUrl || "Voir le carrousel complet"}
                    </button>
                </div>
            ) : (
                <IkebanaCarousel carouselData={carouselData} height={height} maxItems={maxItems} />
            )}
        </div>
    );
}

export default CarouselReveal;
