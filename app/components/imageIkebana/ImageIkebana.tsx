import { carouselIkebanaData, carouselInspirationData } from "./carouselConfig"
import IkebanaCarousel from "./IkebanaCarousel"


function ImageIkebana() {
    return (
        <section className="about-ikebana relative flex flex-col justify-center items-center py-10 px-4  gap-12" id="about-ikebana">
            <figure className="w-full max-w-[100%] ">
                <IkebanaCarousel carouselData={carouselIkebanaData} height={1000}/>
            </figure>
            <figure className="w-full max-w-[100%] ">
                <IkebanaCarousel carouselData={carouselInspirationData} />
            </figure>
        </section>
    )
}

export default ImageIkebana
