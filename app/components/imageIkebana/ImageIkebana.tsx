import IkebanaCarousel from "./IkebanaCarousel"
import IkebanaTitle from "./IkebanaTitle"
import { carouselItems } from "./carouselConfig"


function ImageIkebana() {
    return (
        <section className="about-ikebana relative flex flex-col justify-center items-center py-10 px-4  gap-12" id="about-ikebana">
            <IkebanaTitle />
            <figure className="w-full max-w-[100%] ">
                <IkebanaCarousel imagesToDisplay={carouselItems} />
            </figure>
            <IkebanaTitle />
            <figure className="w-full max-w-[100%] ">
                <IkebanaCarousel imagesToDisplay={carouselItems} />
            </figure>
        </section>
    )
}

export default ImageIkebana
