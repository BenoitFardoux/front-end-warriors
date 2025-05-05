import React, { useState } from "react"
import CustomImage from "../CustomImage"

interface CarrousselProps {
    images: {url: string, alt : string}[],
    imageNumber: number,
    className?: string
}

const Carroussel: React.FC<CarrousselProps> = ({ images, imageNumber, className }) => {
    const [currentIndex, setCurrentIndex] = useState(imageNumber ?? 0);

    const changeImage = (direction: number) => {
        const newIndex = currentIndex + direction;
        
        if (newIndex < 0) {
            setCurrentIndex(images.length - 1);
        } else if (newIndex >= images.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <div className={`flex overflow-x-auto scroll ${className}`}>
            <button className="cursor-pointer" onClick={() => changeImage(-1)}>Prev</button>
            
            {images[currentIndex] && (
                <CustomImage 
                    src={images[currentIndex].url} 
                    alt={images[currentIndex].alt} 
                    className="w-full h-full object-cover" 
                />
            )}
            
            <button className="cursor-pointer" onClick={() => changeImage(1)}>Next</button>
        </div>
    );
};


export default Carroussel;