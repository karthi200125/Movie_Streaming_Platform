import './Info.scss'
import Button from '../../Components/Button/Button'
import ave from '../../Assets/avengers.png'

const Info = ({ onOpen, movie }) => {

    const vidoeplayerOpen = () => {
        onOpen(true)
    }

    const hours = Math.floor(movie?.runtime / 60);
    const remainingMinutes = movie?.runtime % 60;

    return (
        <div className='info'>
            <img src={ave} alt="" className='movietitleimg' />
            <div className='movieyear'>
                <p>{movie?.releaseYear}</p>.
                <p>{`${hours} hr ${remainingMinutes} m`}</p>.
                <p>{movie?.languages?.length} Languages</p>
            </div>
            <div className="moviedesc">
                {movie.overview}
            </div>
            <div className="gemre">
                {movie?.genre?.map((gen) => (
                    <div className="genitem" key={gen}>
                        <span>{gen}</span>
                        <p>|</p>
                    </div>
                ))}
            </div>
            <div className="btns">
                <Button w bg='white' clr='black' onClick={vidoeplayerOpen}>Watch Now</Button>
                <Button bg="rgba(255, 255, 255, 0.2)" pad='15px 20px'>+</Button>
            </div>
        </div>
    )
}

export default Info