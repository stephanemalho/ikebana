import Image from 'next/image';

const Decoration = () => {
    return (
        <div
            id="sakura-zone"
            className="relative mx-auto flex w-full items-start justify-center px-4 pb-6 pt-0 sm:px-6 sm:pb-8 lg:min-h-full lg:items-center lg:px-6 lg:py-10"
        >
            <figure className="intro-reveal relative flex w-full max-w-sm flex-col items-center lg:max-w-md">
                <div className="relative w-full overflow-hidden rounded-[28px] border border-white/80 bg-white/60 shadow-[0_24px_64px_rgba(65,6,2,0.18)] backdrop-blur-sm">
                    <Image
                        src="/images/ikuko/Ikuko-portrait-avec-ikebana.jpg"
                        alt="Portrait d'Ikuko Kato aux côtés d'une composition d'ikebana"
                        width={1763}
                        height={2180}
                        priority
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 1023px) 88vw, 520px"
                    />
                </div>
                <figcaption className="mt-4 max-w-sm text-center text-sm leading-relaxed text-[--secondary-color]/80">
                    Ikuko Kato, entre transmission et création florale, dans l'esprit de l'École Ohara.
                </figcaption>
            </figure>
            <div className="hero-image__overlay" />
        </div>
    );
};
export default Decoration;
