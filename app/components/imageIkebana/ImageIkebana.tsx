import { carouselIkebanaData, carouselInspirationData } from "./carouselConfig"
import CarouselReveal from "./CarouselReveal"

function ImageIkebana() {
    return (
        <section className="about-ikebana relative flex flex-col justify-center items-center py-10 px-4 gap-12" id="about-ikebana">
            <div className="w-full">
                <CarouselReveal carouselData={carouselIkebanaData} />
            </div>
            <div className="w-24 h-1 my-12 bg-[var(--secondary-color)] mx-auto" />
            <div className="w-full">
                <CarouselReveal carouselData={carouselInspirationData} />
            </div>
        </section>
    )
}

export default ImageIkebana
