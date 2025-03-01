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
            className="about-ikebana relative flex flex-col justify-center items-center py-10"
            id="about-ikebana"
        >
            <h1 className="text-2xl text-white mb-5">
                Évadez-vous avec vos propres créations florales et révélez votre talent
            </h1>
            <h2
                lang="ja"
                data-aos="fade-up"
                className="left-7 absolute bottom-6"
            >
                い <br />
                け <br />
                ば <br />
                な <br />
            </h2>

            <div className="w-full max-w-[90%] md:max-w-[60%]">
                <Carousel>
                    <CarouselContent className="flex gap-x-4">
                        {/* Image 1 */}
                        <CarouselItem className="relative overflow-hidden">
                            <Image
                                src="/images/beautiful-ikebana-arrangement.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold">Laissez la nature vous inspirer</h3>
                                <p className="text-sm mt-2">Apprenez à composer des arrangements uniques et harmonieux.</p>
                            </div>
                        </CarouselItem>

                        {/* Image 2 */}
                        <CarouselItem className="relative overflow-hidden">
                            <Image
                                src="/images/arranged-leaves-flowers-with-scissors.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold">Équilibre et simplicité</h3>
                                <p className="text-sm mt-2">Découvrez la beauté des lignes et l’harmonie parfaite des formes.</p>
                            </div>
                        </CarouselItem>

                        {/* Image 3 */}
                        <CarouselItem className="relative overflow-hidden">
                            <Image
                                src="/images/branches-plant-white-flowerpot-with-hanging-hearts.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold">Créez en pleine conscience</h3>
                                <p className="text-sm mt-2">Chaque composition est une méditation, un instant de sérénité.</p>
                            </div>
                        </CarouselItem>

                        {/* Image 4 */}
                        <CarouselItem className="relative overflow-hidden">
                            <Image
                                src="/images/modern-vase-with-bamboo.jpg"
                                alt="Ikebana arrangement"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold">Exprimez votre créativité</h3>
                                <p className="text-sm mt-2">Composez des œuvres vivantes et authentiques, reflets de votre âme.</p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    {/* Boutons de navigation */}
                    <CarouselPrevious
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 
    bg-gradient-to-r from-[#ab060e] to-[#4f0b06] 
    text-white p-3 rounded-full shadow-lg shadow-black/30 
    transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                    />

                    <CarouselNext
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 
    bg-gradient-to-r from-[#ab060e] to-[#4f0b06] 
    text-white p-3 rounded-full shadow-lg shadow-black/30 
    transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                    />
                </Carousel>
            </div>
        </section>
    );
}

export default AboutIkebana;
