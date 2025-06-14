"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { carouselItems } from "./carouselConfig"

function IkebanaCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)

    // Animation automatique toutes les 2 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(activeIndex)
            setActiveIndex((prev) => (prev + 1) % carouselItems.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [activeIndex])


    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className="w-full max-w-[100%] mx-auto">
            {/* Image principale */}
            <div className="relative h-[400px] md:h-[700px]">
                {/* Image actuelle */}
                <Image
                    key={activeIndex}
                    src={carouselItems[activeIndex].imageUrl || "/placeholder.svg"}
                    alt={carouselItems[activeIndex].altText}
                    fill
                    className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-20"
                    priority
                />

                {/* Image précédente pour fade-out */}
                {previousIndex !== null && (
                    <Image
                        key={`prev-${previousIndex}`}
                        src={carouselItems[previousIndex].imageUrl || "/placeholder.svg"}
                        alt={carouselItems[previousIndex].altText}
                        fill
                        className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-10"
                    />
                )}

                {/* Overlay texte toujours au-dessus */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 text-white px-4 transition-opacity duration-300 hover:bg-black/60 z-30">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{carouselItems[activeIndex].title}</h3>
                    <p className="text-sm md:text-base max-w-md">{carouselItems[activeIndex].description}</p>
                </div>
            </div>


            {/* Miniatures */}
            <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                {carouselItems.map((item, index) => (
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
                {carouselItems.map((_, index) => (
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
