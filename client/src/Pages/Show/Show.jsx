import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'
import Image from '../../Components/Image/Image'
import Info from '../../Components/Info/Info'
import { GetMovie } from '../../GetMovie'
import { MoviesData } from '../../MoviesData'
import './Show.scss'
import VideoPlayer from './VideoPlayer/VideoPlayer'

const Show = () => {
    const [watch, setWatch] = useState(false)
    const [preview, setPreview] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const location = useLocation()
    const data = location.state.movie ? location.state.movie : location.state

    const Allmovies = MoviesData.map((movie) => {
        const details = GetMovie({ movieTitle: movie?.title })
        return { ...movie, ...details }
    })

    // Extract genres from the current movie data    
    const genres = data?.genres?.map(genre => genre?.toLowerCase())

    // Filter movies based on the shared genres
    const moreLikeMovies = Allmovies?.filter((movie) => {
        const movieGenres = movie?.genres?.map(genre => genre?.toLowerCase())
        return genres?.some(genre => movieGenres?.includes(genre))
    })
    
    return (
        <div className={`showmoviecon`}>
            {watch && <VideoPlayer onBack={() => setWatch(false)} movie={data} />}
            <div className="mobilemovieinfo">
                <img src={data?.posterImage} alt="" />
                <div className="mobshowcontent">
                    <Info onOpen={() => setWatch(true)} movie={data} isLoading={isLoading} />
                </div>
            </div>
            <div className="movieinfo">
                {preview ? (
                    <div className="imgcon">
                        <img src={data?.posterImage} alt="" className='mainimage' />
                    </div>
                ) : (
                    <div className="videocon">
                        <ReactPlayer url={data?.MoviePreview} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} loop={true} />
                    </div>
                )}
                <div className="showcontent">
                    <Info onOpen={() => setWatch(true)} movie={data} isLoading={isLoading} />
                </div>
                <div className="showbottom">
                    <div className="casts">
                        <h1 className='rating'>Rating : <span>{data?.rating}</span></h1>
                        <div className="castscon">
                            {data?.cast?.slice(0, 15).map((cast) => (
                                <div className="cast" key={cast}>
                                    <Image src={cast.image} alt={cast?.name} w={'100px'} h={'100px'} br={'50%'} />
                                    <span>{cast?.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="showbtmtop">
                        <span style={{ color: "white" }}>More Like This</span>
                        <span>Suggested</span>
                    </div>
                    <div className="suggestion">
                        <Carousel CatTitle="More Like This" morelikemovies={moreLikeMovies} />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Show
