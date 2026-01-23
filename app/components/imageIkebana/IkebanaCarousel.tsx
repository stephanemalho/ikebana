"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { carouselMetadataType } from "./carouselConfig"

type IkebanaCarouselProps = {
    carouselData: carouselMetadataType
    height?: number
    maxItems?: number
}

function IkebanaCarousel({ carouselData, height = 700, maxItems }: IkebanaCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)

    const displayImages = useMemo(() => {
        const limit = typeof maxItems === "number" ? maxItems : carouselData.items.length
        return carouselData.items.slice(0, limit)
    }, [carouselData.items, maxItems])

    useEffect(() => {
        if (displayImages.length <= 1) return
        const interval = setInterval(() => {
            setPreviousIndex(activeIndex)
            setActiveIndex((prev) => (prev + 1) % displayImages.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [activeIndex, displayImages.length])

    const handleThumbnailClick = (index: number) => {
        setPreviousIndex(activeIndex)
        setActiveIndex(index)
    }

    return (
        <div className="w-full max-w-[100%] mx-auto">
            <div className="relative h-[400px]" style={{ height: `${height}px` }}>
                <Image
                    data-aos="fade"
                    key={activeIndex}
                    src={displayImages[activeIndex]?.imageUrl || "/placeholder.svg"}
                    alt={displayImages[activeIndex]?.altText || "Ikebana"}
                    fill
                    className="object-cover absolute inset-0 transition-opacity duration-1500 ease-in-out opacity-100 z-20"
                    loading="eager"
                    priority
                />

                {previousIndex !== null && previousIndex !== activeIndex && (
                    <Image
                        data-aos="fade"
                        key={`prev-${previousIndex}`}
                        src={displayImages[previousIndex]?.imageUrl || "/placeholder.svg"}
                        alt={displayImages[previousIndex]?.altText || "Ikebana"}
                        fill
                        className="object-cover absolute inset-0 transition-opacity duration-1500 ease-in-out opacity-0 z-10"
                        loading="lazy"
                    />
                )}

                <div className="absolute inset-0 flex flex-col justify-start items-start hover:text-white p-4 transition-opacity duration-500 bg-transparent text-black z-30">
                    <div className="bg-black/30 p-4 rounded-md max-w-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{displayImages[activeIndex]?.title}</h3>
                        <p className="text-sm md:text-base max-w-md">{displayImages[activeIndex]?.description}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 justify-center overflow-x-auto pb-2 modern-scrollbar">
                {displayImages.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-500 my-6 ${index === activeIndex
                            ? "ring-4 ring-[--secondary-color] scale-105 shadow-lg"
                            : "hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100"
                            }`}
                        aria-label={`Voir ${item.title}`}
                    >
                        <Image
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.altText}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 96px"
                            loading="lazy"
                        />
                        {index === activeIndex && <div className="absolute inset-0 bg-[--secondary-color]/20"></div>}
                    </button>
                ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
                {displayImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${index === activeIndex ? "bg-[--secondary-color] w-6" : "bg-[--background] hover:bg-[--primary-color]"
                            }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default IkebanaCarousel
