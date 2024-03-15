import { useState } from 'react';
import MovieCard from '../Carousel/MovieCard/MovieCard';
import './MovieCards.scss';
import Button from '../Button/Button';

const MovieCards = ({ movies }) => {
    const [displayedMovies, setDisplayedMovies] = useState(15);
    const [movieCard, setMovieCard] = useState(null);

    const handleShowMore = () => {
        setDisplayedMovies(prevDisplayedMovies => prevDisplayedMovies + 15);
    };

    return (
        <div className='moivecards'>
            {movies?.length > 0 ? (
                movies.slice(0, displayedMovies).map((movie) => {
                    return (
                        <div className="carouselmovie" key={movie?.id} onMouseEnter={() => setMovieCard(movie)}>
                            <div className={`${movie?.isFree ? "free" : "free sub"}`} >
                                <span>{movie?.isFree ? "FREE" : "SUB"}</span>
                            </div>
                            <img src={movie?.posterImage} alt={movie?.title} className='cmimg' />
                            <div className="carouselmoviecard">
                                {movieCard && movieCard?.title === movie?.title && (
                                    <MovieCard movie={movie} />
                                )}
                            </div>
                        </div>
                    )
                })
            ) : (
                <div className="noresult">
                    <h1>"No Movies Found"</h1>
                </div>
            )}
            {movies?.length > displayedMovies && (
                <div className="showmorebtncon">
                    <Button onClick={handleShowMore} bg>Show More</Button>
                </div>
            )}
        </div>
    )
}

export default MovieCards;
