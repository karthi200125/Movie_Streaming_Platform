import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './MovieCards.scss';
import Mcard from '../Mcard/Mcard'
import { McardSkeleton } from '../Skeletons/Skeletons';

const MovieCards = ({ movies, isLoading }) => {
    const [displayedMovies, setDisplayedMovies] = useState(15);
    const user = useSelector((state) => state.user.user)

    const handleShowMore = () => {
        setDisplayedMovies(prevDisplayedMovies => prevDisplayedMovies + 15);
    };

    return (
        <div className='moivecards'>
            {isLoading ?
                <McardSkeleton count={12} />
                :
                movies?.length > 0 ? (
                    movies.slice(0, displayedMovies).map((movie) => {
                        return (
                            <Mcard key={movie} movie={movie} />
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
