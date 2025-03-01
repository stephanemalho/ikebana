import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { carouselItems } from "./carouselConfig";

function IkebanaCarousel() {
    return (
        <Carousel>
            <CarouselContent className="flex gap-x-4">
                {carouselItems.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="relative overflow-hidden"
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.altText}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                        <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm mt-2">{item.description}</p>
                        </figcaption>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2" />
        </Carousel>
    );
}

export default IkebanaCarousel;
