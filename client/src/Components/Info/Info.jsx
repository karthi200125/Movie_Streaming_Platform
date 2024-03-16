import React from 'react';
import Button from '../../Components/Button/Button';
import { InfoSkeleton } from '../Skeletons/Skeletons';
import './Info.scss';

const Info = ({ onOpen, movie, isLoading }) => {

    const vidoeplayerOpen = () => {
        onOpen(true);
    };

    const hours = Math.floor(movie?.runtime / 60);
    const remainingMinutes = movie?.runtime % 60;

    const isSub = false

    return (
        <div className='info'>
            {isLoading ? (
                <InfoSkeleton />
            ) : (
                <>
                    {movie?.titleImg ?
                        <img src={movie?.titleImg} alt={movie?.title} className='movietitleimg' />
                        :
                        <div className='movietitleimg'>{movie?.title}</div>
                    }
                    <div className='movieyear'>
                        <p>{movie?.releaseYear}</p>.
                        <p>{`${hours} hr ${remainingMinutes} m`}</p>.
                        <p>{movie?.languages?.length} Languages</p>
                    </div>
                    <div className='moviedesc'>{movie?.overview}</div>
                    <div className='gemre'>
                        {movie?.genres?.map((gen) => (
                            <div className='genitem' key={gen}>
                                <span>{gen}</span>
                                <p>|</p>
                            </div>
                        ))}
                    </div>
                    <div className='btns'>
                        <Button
                            w
                            bg={isSub ? "white" : movie?.isFree ? 'white' : 'linear-gradient(to right, #f3e96f, #947303, #ceb349)'}
                            clr={isSub ? "black" : movie?.isFree ? 'black' : 'white'}
                            onClick={vidoeplayerOpen}
                        >
                            {isSub ? "Watch Now" : movie?.isFree ? 'Watch Now' : 'Subscribe & watch'}
                        </Button>
                        <Button bg='rgba(255, 255, 255, 0.2)' pad='15px 20px'>
                            +
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Info;
