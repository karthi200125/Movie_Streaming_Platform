import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../Components/Image/Image';
import { GetMovie } from '../../GetMovie';
import './Carousel.scss';
import MovieCard from './MovieCard/MovieCard';

const Carousel = ({ movies, promovies, CatTitle, morelikemovies }) => {
    const [movieCard, setMovieCard] = useState(null);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate('/show', { state: { movie } });
    };

    return (
        <div className="carouselcon">
            <div className="cartop">
                <h1>{CatTitle}</h1>
                <div className="viewall">
                    <Link to="/category" className="view">
                        View All
                    </Link>
                    <MdKeyboardArrowRight className="viweallicon" />
                </div>
            </div>
            <div className="carouselcards">
                {(morelikemovies || promovies || movies)?.map((movie) => {
                    let data;
                    if (!morelikemovies) {
                        data = GetMovie({ movieTitle: movie.title });
                        if (!promovies) {
                            const hasSameGenre = data?.genres?.some(
                                (genre) => genre.toLowerCase() === CatTitle.toLowerCase()
                            );
                            if (!hasSameGenre) {
                                return null;
                            }
                        }
                    } else {
                        data = movie;
                    }

                    return (
                        <div
                            className="carouselmovie"
                            key={movie?.id}
                            onMouseEnter={() => setMovieCard(movie)}
                            onClick={() => handleClick(data)}
                        >
                            <div className={`free ${user?.isSub ? '' : 'sub'}`}>
                                <span>{user?.isSub ? 'FREE' : 'SUB'}</span>
                            </div>
                            <div className="cardrating">
                                {data?.rating}
                            </div>
                            <Image src={data?.posterImage} alt={data?.title} cs="cmimg" w="180px" h="230px" br="5px" />
                            <div className="carouselmoviecard">
                                {movieCard && movieCard.name === movie.name && <MovieCard movie={{ ...movieCard, ...data }} />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
