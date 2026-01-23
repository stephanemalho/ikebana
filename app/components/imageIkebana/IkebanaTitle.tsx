import { carouselMetadataType } from "./carouselConfig";

type CarouselMainTitleProps = {
    title: carouselMetadataType["title"];
    description: carouselMetadataType["description"];
};

function CarouselMainTitle({ title, description }: CarouselMainTitleProps) {
    return (
        <>
            <h2 className="text-4xl text-center font-semibold text-[var(--secondary-color)] mb-6"
                style={{ fontFamily: "var(--playfair-display)" }}>
                {title}
            </h2>
            <p className="text-md text-[--secondary-color] my-12 text-center md:w-[60%] m-auto">
                {description}
            </p>
        </>
    )
}

export default CarouselMainTitle
