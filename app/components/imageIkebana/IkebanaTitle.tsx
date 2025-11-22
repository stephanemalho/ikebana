import { carouselMetadataType } from "./carouselConfig";

type CarouselMainTitleProps = {
    title: carouselMetadataType["title"];
    description: carouselMetadataType["description"];
};

function CarouselMainTitle({ title, description }: CarouselMainTitleProps) {
    return (
        <>
            <h1 data-aos="fade" className="text-4xl text-center md:text-6xl font-bold text-[var(--secondary-color)] mb-6"
                            style={{ fontFamily: "var(--playfair-display)" }}>
                {title}
            </h1>
            <p data-aos="fade" className="text-md text-[--secondary-color] my-12 text-center md:w-[60%] m-auto">
                {description}
            </p>
        </>
    )
}

export default CarouselMainTitle
