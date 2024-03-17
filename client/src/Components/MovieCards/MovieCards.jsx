import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import MovieCard from '../Carousel/MovieCard/MovieCard';
import Image from '../Image/Image';
import './MovieCards.scss';

const MovieCards = ({ movies }) => {
    const [displayedMovies, setDisplayedMovies] = useState(15);
    const [movieCard, setMovieCard] = useState(null);
    const user = useSelector((state) => state.user.user)

    const handleShowMore = () => {
        setDisplayedMovies(prevDisplayedMovies => prevDisplayedMovies + 15);
    };
    
    return (
        <div className='moivecards'>
            {movies?.length > 0 ? (
                movies.slice(0, displayedMovies).map((movie) => {
                    return (
                        <div className="carouselmovie" key={movie?.id} onMouseEnter={() => setMovieCard(movie)}>
                            <div className={`${user?.isSub ? "free" : movie?.isFree ? "free" : "free sub"}`} >
                                <span>{user?.isSub ? "FREE" : movie?.isFree ? "FREE" : "SUB"}</span>
                            </div>
                            <div className="cardrating">                                
                                    {movie?.rating}                                
                            </div>
                            <Image src={movie?.posterImage} alt={movie?.title} cs="cmimg" w={'180px'} h={'230px'} br={'5px'} />
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
