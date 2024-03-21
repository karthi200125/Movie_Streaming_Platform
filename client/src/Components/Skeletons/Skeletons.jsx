import './Skeletons.scss';

export const InfoSkeleton = () => {
    return (
        <div className='infosk'>
            <div className='skeleton-movie-title-img'></div>
            <div className='skeleton-movie-year'>
                <div className='year'></div>
                <div></div>
                <div className='lan'></div>
                <div className='u'></div>
            </div>
            <div className='skeleton-movie-description'></div>
            <div className='skeleton-movie-year'>
                <div></div> |
                <div></div> |
                <div></div> |
                <div></div>
            </div>
            <div className='skeleton-buttons'>
                <div className='skeleton-button'></div>
                <div className='skeleton-button plussk'></div>
            </div>
        </div>
    )
}

import React from 'react';

export const McardSkeleton = ({ slide, count }) => {
    return (
        <div className={`mcardskeletoncon ${slide && "sliderske"}`}>
            {[...Array(count)].map((_, index) => (
                <div key={index} className="mcardskeleton"></div>
            ))}
        </div>
    );
};

