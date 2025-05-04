import React from "react"
import CustomImage from "../CustomImage"

interface CarrousselProps {
    images: {url: string, alt : string}[],
    className?: string
}

const Carroussel: React.FC<CarrousselProps> = ({ images, className }) => {
    return (
        <div className={`flex overflow-x-auto ${className}`}>
            {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full">
                    <CustomImage src={image.url} alt={image.alt}></CustomImage>
                </div>
            ))}
        </div>
    )
}

export default Carroussel;