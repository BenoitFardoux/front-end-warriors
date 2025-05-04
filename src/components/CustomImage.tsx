import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
};

export default CustomImage;