import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Image from '../../Components/Image/Image'
import Info from '../../Components/Info/Info'
import Slider from '../../Components/Slider/Slider'
import useGetMovies from '../../Utils/GetAllMovies'
import './Show.scss'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import DocTitle from '../../Components/Title'

const Show = () => {
    const [watch, setWatch] = useState(false)
    const [preview, setPreview] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreview(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const location = useLocation()
    const data = location.state.movie ? location.state.movie : location.state
    const { moviesData, isLoading: showLaoding } = useGetMovies();

    const genres = data?.genres?.map(genre => genre?.toLowerCase())

    // Filter movies based on the shared genres
    const moreLikeMovies = moviesData?.filter((movie) => {
        const movieGenres = movie?.genres?.map(genre => genre?.toLowerCase())
        return genres?.some(genre => movieGenres?.includes(genre))
    })

    return (
        <div className={`showmoviecon`}>
            <DocTitle title={`${data.movieTitle}`} />
            {watch && <VideoPlayer onBack={() => setWatch(false)} movie={data} />}
            <div className="mobilemovieinfo">
                <img src={data?.thumpnailImg} alt="" />
                <div className="mobshowcontent mobshow">
                    <Info onOpen={() => setWatch(true)} movie={data} isLoading={showLaoding} />
                </div>
            </div>
            <div className="movieinfo">
                {preview ? (
                    <div className="imgcon">
                        <img src={data?.thumpnailImg} alt="" className='mainimage' />
                    </div>
                ) : (
                    <div className="videocon">
                        <ReactPlayer url={data?.moviePreview} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} loop={true} />
                    </div>
                )}
                <div className="showcontent">
                    <Info onOpen={() => setWatch(true)} movie={data} isLoading={showLaoding} />
                </div>
            </div>
            <div className="showbottom">
                <h1 className='showrating'>Movie Rating : <span>{data?.rating}</span></h1>
                <div className="casts">
                    {data?.cast?.slice(0, 15).map((cast) => (
                        <div className="cast" key={cast}>
                            <Image src={cast.image} alt={cast?.name} cs="castimg" />
                            <span>{cast?.name}</span>
                        </div>
                    ))}
                </div>
                <Slider sTitle='More Like This' otherMovies={moreLikeMovies} />
                <Slider sTitle='Suggested Movies' sGenre={'Adventure'} sMovies={moviesData} />
                <Footer />
            </div>
        </div>
    )
}

export default Show
