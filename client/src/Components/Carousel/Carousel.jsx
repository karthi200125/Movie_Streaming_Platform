import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { SkeletonCard } from '../Skeletons/Skeletons';
import './Carousel.scss';
import MovieCard from './MovieCard/MovieCard';
import { Link, useNavigate } from 'react-router-dom';
import { GetMovie } from '../../GetMovie';
import Image from '../../Components/Image/Image'

const Carousel = ({ movies, CatTitle }) => {
    const [movieCard, setMovieCard] = useState(null);

    const navigate = useNavigate()
    const handleClick = (movie) => {
        navigate('/show', { state: { movie } })
    }

    const isSub = false

    return (
        <div className='carouselcon'>
            <div className="cartop">
                <h1>{CatTitle}</h1>
                <div className="viewall">
                    <Link to={'/category'} className='view'>View All</Link>
                    <MdKeyboardArrowRight className='viweallicon' />
                </div>
            </div>
            <div className="carouselcards">
                {movies?.map((movie) => {
                    const data = GetMovie({ movieTitle: movie.title });
                    const hasSameGenre = data?.genres?.some(genre => genre.toLowerCase() === CatTitle.toLowerCase());

                    if (!hasSameGenre) {
                        return null;
                    }

                    return (
                        <div className="carouselmovie" key={movie?.id} onMouseEnter={() => setMovieCard(movie)} onClick={() => handleClick(data)}>
                            <div className={`${isSub ? "free" : movie?.isFree ? "free" : "free sub"}`} >
                                <span>{isSub ? "FREE" : movie?.isFree ? "FREE" : "SUB"}</span>
                            </div>
                            <Image src={data?.posterImage} alt={data?.title} cs="cmimg" w={'180px'} h={'230px'} br={'5px'} />
                            <div className="carouselmoviecard">
                                {movieCard && movieCard.name === movie.name && (
                                    <MovieCard movie={{ ...movieCard, ...data }} />
                                )}
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    );
};

export default Carousel;
