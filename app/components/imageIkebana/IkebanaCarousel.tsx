"use client"

import { useState, useEffect, useRef } from "react"
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
    const [isOpen, setIsOpen] = useState(false)
    const displayImages = carouselData.items;
    const panelId = `carousel-${carouselData.title.replace(/\s+/g, "-").toLowerCase()}`

    useEffect(() => {
        if (!isOpen) return
        const interval = setInterval(() => {
            setPreviousIndex(activeIndex)
            setActiveIndex((prev) => (prev + 1) % displayImages.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [isOpen, activeIndex, displayImages.length])


    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index)
    }

    const toggleAccordion = () => setIsOpen((v) => !v)

    const containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (typeof window === "undefined") return

        const el = containerRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsOpen(true)
                        observer.disconnect()
                    }
                })
            },
            { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="w-full max-w-[100%] mx-auto">
            <div className="w-full">
                <button
                    id={`${panelId}-button`}
                    aria-expanded={isOpen}
                    aria-controls={`${panelId}-panel`}
                    onClick={toggleAccordion}
                    className="w-full text-left flex items-center justify-between focus:outline-none"
                >
                    <CarouselMainTitle title={carouselData.title} description={carouselData.description} />
                    <span
                        aria-hidden
                        className={`ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
            {/* Collapsible content — hide when closed */}
            <div ref={containerRef}
                className={`w-full overflow-hidden transition-[max-height,opacity] duration-500 ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
                id={`${panelId}-panel`}
                role="region"
                aria-labelledby={`${panelId}-button`}
                aria-hidden={!isOpen}
            >
                <div className="relative h-[400px]" style={{ height: `${height}px` }}>
                    {/* Image actuelle */}
                    <Image
                        key={activeIndex}
                        src={displayImages[activeIndex].imageUrl || "/placeholder.svg"}
                        alt={displayImages[activeIndex].altText}
                        fill
                        className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-20"
                        loading={isOpen ? "eager" : "lazy"}
                        priority={isOpen}
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
                            loading="lazy"
                        />
                    )}

                    {/* Overlay texte toujours au-dessus */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start hover:text-white p-4 transition-opacity duration-300 bg-transparent text-black z-30">
                        <div className="bg-black/30 p-4 rounded-md max-w-lg">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{displayImages[activeIndex].title}</h3>
                            <p className="text-sm md:text-base max-w-md">{displayImages[activeIndex].description}</p>
                        </div>
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
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[--secondary-color] w-6" : "bg-[--background] hover:bg-[--primary-color]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IkebanaCarousel
