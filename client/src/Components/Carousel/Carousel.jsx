import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { SkeletonCard } from '../Skeletons/Skeletons';
import './Carousel.scss';
import MovieCard from './MovieCard/MovieCard';
import { Link, useNavigate } from 'react-router-dom';
import { GetMovie } from '../../GetMovie';

const Carousel = ({ movies, CatTitle }) => {
    const [movieCard, setMovieCard] = useState(null);

    const navigate = useNavigate()
    const handleClick = (movie) => {
        navigate('/show', { state: { movie } })
    }

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
                        <div className="carouselmovie" key={movie?.id} onMouseEnter={() => setMovieCard(data)} onClick={() => handleClick(data)}>
                            <div className="free">
                                <span>FREE</span>
                            </div>
                            <img src={data?.posterImage} alt={data?.title} className="cmimg" loading='lazy' />
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
