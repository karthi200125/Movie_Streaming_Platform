import { useEffect, useState } from 'react';
import './Image.scss';

const Image = ({ src, w, h, br, alt, cs }) => {
    const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => {
            setImageLoading(true);
        };
        image.src = src;
    }, [src]);

    return (
        <>
            {!imageLoading && (
                <div className={`imgskeleton ${cs}`} >
                    <span className={`imgskeletontitle`} >{alt}</span>
                </div>
            )}
            {imageLoading && (
                <img src={src} className={`${cs}`} alt={alt} loading='lazy' />
            )}
        </>
    );
};

export default Image;
