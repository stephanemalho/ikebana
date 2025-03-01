import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

function AboutIkebana() {
    return (
        <section
            className="about-ikebana relative flex justify-center items-center py-10"
            id="about-ikebana"
        >
            <h2 lang="ja" data-aos="fade-up" className="left-7 absolute bottom-6">
                い <br />
                け <br />
                ば <br />
                な <br />
            </h2>

            <div className="w-full max-w-[90%] md:max-w-[60%]">
                <Carousel>
                    <CarouselContent className="flex gap-x-4">
                        <CarouselItem className="overflow-hidden">
                            <Image
                                src="/images/arranged-leaves-flowers-with-scissors.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem className="overflow-hidden">
                            <Image
                                src="/images/beautiful-ikebana-arrangement.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem className="overflow-hidden">
                            <Image
                                src="/images/branches-plant-white-flowerpot-with-hanging-hearts.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem className=" overflow-hidden">
                            <Image
                                src="/images/modern-vase-with-bamboo.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem className=" overflow-hidden">
                            <Image
                                src="/images/top-view-branch-with-flowers.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className=" bg-black text-white p-2 rounded-full" />
                    <CarouselNext className=" bg-black text-white p-2 rounded-full" />
                </Carousel>
            </div>
        </section>
    );
}

export default AboutIkebana;
