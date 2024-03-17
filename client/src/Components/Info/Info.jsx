import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Button/Button';
import { watchedMovies } from '../../Redux/AuthSlice';
import { AxiosRequest } from '../../Utils/Axiosrequest';
import Model from '../Model/Model';
import { InfoSkeleton } from '../Skeletons/Skeletons';
import Subscription from '../Subscription/Subscription';
import './Info.scss';
import axios from 'axios';

const Info = ({ onOpen, movie, isLoading  }) => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const vidoeplayerOpen = async () => {
        try {
            const res = await axios.put('http://localhost:8800/api/auth/watchedmovies', { userId: user?._id, movieId: movie?.id })
            console.log(res.data)
            dispatch(watchedMovies(res.data))
            onOpen(true);
        } catch (error) {
            console.log(error)
        }
    };

    const hours = Math.floor(movie?.runtime / 60);
    const remainingMinutes = movie?.runtime % 60;

    const [subOpen, setSubOpen] = useState(false)

    const hadlesubopen = () => {
        setSubOpen(true)
    }

    return (
        <div className='info'>
            <Model onOpen={subOpen} onClose={() => setSubOpen(false)} bodycontent={<Subscription />} />
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
                            bg={user?.isSub ? "white" : movie?.isFree ? 'white' : 'linear-gradient(to right, #f3e96f, #947303, #ceb349)'}
                            clr={user?.isSub ? "black" : movie?.isFree ? 'black' : 'white'}
                            onClick={user?.isSub ? vidoeplayerOpen : movie?.isFree ? vidoeplayerOpen : hadlesubopen}
                        >
                            {user?.isSub ? "Watch Now" : movie?.isFree ? 'Watch Now' : 'Subscribe & watch'}
                        </Button>
                        <Button bg='rgba(255, 255, 255, 0.2)' pad='15px 20px'>+</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Info;
