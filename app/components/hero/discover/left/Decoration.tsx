import Image from 'next/image';
import LazySakuraPetals from './LazySakuraPetals';


const Decoration = () => {
    return (
        <div  id="sakura-zone" className="relative mx-auto">
            <Image
                src="/assets/sakura-hero-section.webp"
                alt="sakura branch"
                width={700}
                height={100}
                priority
                data-aos="fade-down"
            />
            <LazySakuraPetals />
            <div className="hero-image__overlay" />
        </div>
    );
};
export default Decoration;
