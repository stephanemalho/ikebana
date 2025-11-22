"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { carouselMetadataType } from "./carouselConfig"
import CarouselMainTitle from "./IkebanaTitle"

type IkebanaCarouselProps = {
    carouselData: carouselMetadataType
    height?: number
}

function IkebanaCarousel({ carouselData, height = 700 }: IkebanaCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const displayImages = carouselData.items;

    // Animation automatique toutes les 2 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(activeIndex)
            setActiveIndex((prev) => (prev + 1) % displayImages.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [activeIndex])


    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className="w-full max-w-[100%] mx-auto">
            {/* Image principale */}
            <CarouselMainTitle title={carouselData.title} description={carouselData.description} />
            <div className="relative h-[400px]" style={{ height: `${height}px` }}>
                {/* Image actuelle */}
                <Image
                    key={activeIndex}
                    src={displayImages[activeIndex].imageUrl || "/placeholder.svg"}
                    alt={displayImages[activeIndex].altText}
                    fill
                    className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-20"
                    priority
                    objectFit="cover"
                />

                {/* Image précédente pour fade-out */}
                {previousIndex !== null && (
                    <Image
                        key={`prev-${previousIndex}`}
                        src={displayImages[previousIndex].imageUrl || "/placeholder.svg"}
                        alt={displayImages[previousIndex].altText}
                        fill
                        className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-10"
                    />
                )}

                {/* Overlay texte toujours au-dessus */}
                <div className="absolute inset-0 flex flex-col justify-start items-start bg-black/40 text-white p-4 transition-opacity duration-300 hover:bg-transparent hover:text-black z-30">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{displayImages[activeIndex].title}</h3>
                    <p className="text-sm md:text-base max-w-md">{displayImages[activeIndex].description}</p>
                </div>
            </div>


            {/* Miniatures */}
            <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                {displayImages.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 my-6 ${index === activeIndex
                            ? "ring-4 ring-[--secondary-color] scale-105 shadow-lg"
                            : "hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.altText}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 96px"
                        />
                        {/* Indicateur actif */}
                        {index === activeIndex && <div className="absolute inset-0 bg-[--secondary-color]/20"></div>}
                    </button>
                ))}
            </div>

            {/* Indicateurs de progression */}
            <div className="flex justify-center mt-4 gap-2">
                {displayImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[--secondary-color] w-6" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default IkebanaCarousel
