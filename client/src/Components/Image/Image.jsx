import { useEffect, useState } from 'react';
import './Image.scss'

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
                <div className="imgskeleton" style={{ width: `${w}`, height: `${h}`, borderRadius: `${br}` }}>
                    <span className='imgskeletontitle'>{alt}</span>
                </div>
            )}
            {imageLoading && (
                <img src={src} className={`${cs}`} alt={alt} style={{ width: `${w}`, height: `${h}`, borderRadius: `${br}`, objectFit: "cover" }} loading='lazy' />
            )}
        </>
    );
};

export default Image;
