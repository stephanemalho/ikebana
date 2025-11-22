import { carouselIkebanaData, carouselInspirationData } from "./carouselConfig"
import IkebanaCarousel from "./IkebanaCarousel"
import Image from "next/image"

function ImageIkebana() {
    return (
        <section className="about-ikebana relative flex flex-col justify-center items-center py-10 px-4 gap-12" id="about-ikebana">
            {/* Desktop - Carousels complets */}
            <div className="hidden lg:block w-full">
                <figure className="w-full max-w-[100%] mb-12">
                    <IkebanaCarousel carouselData={carouselIkebanaData} height={1000} />
                </figure>
                <figure className="w-full max-w-[100%]">
                    <IkebanaCarousel carouselData={carouselInspirationData} />
                </figure>
            </div>

            {/* Mobile/Tablet - Une seule image */}
            <div className="lg:hidden w-full flex flex-col items-center">
                <h1 className="text-2xl text-[--secondary-color] mb-5 text-center" style={{ fontFamily: 'var(--playfair-display)' }}>
                    {carouselIkebanaData.title}
                </h1>
                <p className="text-md text-[--secondary-color] mb-8 text-center px-4" style={{ fontFamily: 'var(--plus-jakarta-sans)' }}>
                    {carouselIkebanaData.description}
                </p>
                <figure className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden">
                    <Image
                        src={carouselIkebanaData.items[0].imageUrl}
                        alt={carouselIkebanaData.items[0].altText}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
                        <h3 className="text-xl font-bold mb-2 text-center">{carouselIkebanaData.items[0].title}</h3>
                        <p className="text-sm text-center">{carouselIkebanaData.items[0].description}</p>
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default ImageIkebana
