import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import './MovieCard.scss'

const MovieCard = ({ movie }) => {
    const [watch, setWatch] = useState(true)
    const user = useSelector((state) => state.user.user)

    const handleShowWatch = (e) => {
        e.stopPropagation()
        setWatch(true)
    }

    return (
        <Link to={'/show'} state={movie} className='mcard' onClick={(e) => e.stopPropagation()}>
            <img src={movie?.posterImage} alt={movie?.title} className='moviecardimg' />
            <div className="mcontent">
                <div className="top">
                    <Button w bg={user?.isSub ? "white" : movie?.isFree ? 'white' : 'linear-gradient(to right, #f3e96f, #947303, #ceb349)'} clr={user?.isSub ? "black" : movie?.isFree ? "black" : "white"} >{user?.isSub ? "Watch" : movie?.isFree ? "Watch Now" : "Subscribe & watch"}</Button>
                    <Button bg='#282a31' pad='15px 20px'>+</Button>
                </div>
                <div className="btm">
                    <span>
                        {movie?.genres?.map((gen) => (
                            <div className="genitem" key={gen}>
                                <span>{gen}</span>
                                <p>|</p>
                            </div>
                        ))}
                    </span>
                    <p className="mdesc">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
