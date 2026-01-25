import { carouselMetadataType } from "./carouselConfig";

type CarouselMainTitleProps = {
    id: carouselMetadataType["id"];
    title: carouselMetadataType["title"];
    description: carouselMetadataType["description"];
};

function CarouselMainTitle({ id, title, description }: CarouselMainTitleProps) {
    return (
        <>
            <h2
                id={id}
                className="text-2xl text-center font-semibold text-[var(--secondary-color)] mb-6"
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
