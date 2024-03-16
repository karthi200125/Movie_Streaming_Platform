import './Skeletons.scss'

export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
        </div>
    );
};


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
