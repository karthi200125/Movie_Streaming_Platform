import { useState } from 'react';
import { MOVIES } from '../../dummy';
import MovieCard from '../Carousel/MovieCard/MovieCard';
import './MovieCards.scss';
import { MoviesData } from '../../MoviesData';
import { GetMovie } from '../../GetMovie';

const MovieCards = () => {

    const [movieCard, setMovieCard] = useState(null);

    return (
        <div className='moivecards'>
            {MoviesData.map((movie) => {
                const data = GetMovie({ movieTitle: movie.title })                
                return (
                    <div className="carouselmovie" key={movie.id} onMouseEnter={() => setMovieCard(data)}>
                        <img src={data?.posterImage} alt={data?.title} className='cmimg' />
                        <div className="carouselmoviecard">
                            {movieCard && movieCard.title === data.title && (
                                <MovieCard movie={{ ...movieCard, ...movie }} />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieCards