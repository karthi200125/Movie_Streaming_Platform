import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Button/Button';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import { watchedMovies } from '../../Redux/AuthSlice';
import AxiosRequest from '../../Utils/Axiosrequest';
import Image from '../Image/Image';
import Model from '../Model/Model';
import { InfoSkeleton } from '../Skeletons/Skeletons';
import Subscription from '../Subscription/Subscription';
import './Info.scss';


const Info = ({ onOpen, movie, isLoading }) => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    const vidoeplayerOpen = async () => {
        try {
            const token = localStorage.getItem('access_token')
            AxiosRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await AxiosRequest.put('/auth/watchedmovies', { userId: user?._id, movieId: movie?._id })
            dispatch(watchedMovies(res.data))
            onOpen(true);
        } catch (error) {
            console.log(error)
        }
    };

    const hours = Math.floor(movie?.runtime / 60);
    const remainingMinutes = movie?.runtime % 60;

    const [subOpen, setSubOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [regOpen, setRegOpen] = useState(false);

    const hadlesubopen = () => {
        setSubOpen(true)
    }

    const handleLoginOpen = () => {
        setLoginOpen(true)
    }

    return (
        <div className='info'>
            <Model onOpen={subOpen} onClose={() => setSubOpen(false)} bodycontent={<Subscription />} />
            <Model onOpen={regOpen} onClose={() => setRegOpen(false)} bodycontent={<Register onLogOpen={() => setLoginOpen(true)} onRegClose={() => setRegOpen(false)} />} />
            <Model onOpen={loginOpen} onClose={() => setLoginOpen(false)} bodycontent={<Login onLogClose={() => setLoginOpen(false)} onRegOpen={() => setRegOpen(true)} />} />
            {isLoading ? (
                <InfoSkeleton />
            ) : (
                <>
                    {movie?.TitleImg ?
                        <Image src={movie?.TitleImg} alt={movie?.movieTitle} cs='movietitleimg' />
                        :
                        <div className='movietitleimg'>{movie?.movieTitle}</div>
                    }
                    <div className='movieyear'>
                        {movie?.releaseYear && <p>{movie?.releaseYear}</p>}
                        {movie?.runtime && <p>{`${hours} hr ${remainingMinutes} m`}</p>}
                        {movie?.languages && <p>{movie?.languages?.length} Languages</p>}
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
                            onClick={!user ? handleLoginOpen : user?.isSub ? vidoeplayerOpen : movie?.isFree ? vidoeplayerOpen : hadlesubopen}
                        >
                            {!user ? "Login & watch" : user?.isSub ? "Watch Now" : movie?.isFree ? 'Watch Now' : 'Subscribe & watch'}
                        </Button>
                        <Button bg='rgba(255, 255, 255, 0.2)' pad='15px 20px'>+</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Info;
