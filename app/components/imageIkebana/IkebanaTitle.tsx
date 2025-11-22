import { carouselMetadataType } from "./carouselConfig";

type CarouselMainTitleProps = {
    title: carouselMetadataType["title"];
    description: carouselMetadataType["description"];
};

function CarouselMainTitle({ title, description }: CarouselMainTitleProps) {
    return (
        <>
            <h1 data-aos="fade" className="mt-8 text-2xl text-[--secondary-color] mb-5 text-center">
                {title}
            </h1>
            <p data-aos="fade" className="text-md text-[--secondary-color] my-12 text-center md:w-[60%] m-auto">
                {description}
            </p>
        </>
    )
}

export default CarouselMainTitle
