import { useEffect, useState } from 'react'
import './Show.scss'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import img from '../../Assets/avatar.jpg'
import video from '../../Assets/trailer/dark.mp4'
import ReactPlayer from 'react-player'
import Info from '../../Components/Info/Info'
import { MOVIES } from '../../dummy'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import noprofile from '../../Assets/noprofile.png'
import Image from '../../Components/Image/Image'

const Show = () => {
    const [watch, setWatch] = useState(false)
    const [preview, setPreview] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreview(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const location = useLocation()
    const data = location.state.movie ? location.state.movie : location.state;


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
                {preview ?
                    <div className="imgcon">
                        <img src={data?.posterImage} alt="" className='mainimage' />
                    </div>
                    :
                    <div className="videocon">
                        <ReactPlayer url={data?.MoviePreview} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} loop={true} />
                    </div>
                }
                < div className="showcontent">
                    <Info onOpen={() => setWatch(true)} movie={data} isLoading={isLoading} />
                </div>
                <div className="showbottom">
                    <div className="casts">
                        <h1 className='rating'>Rating : <span>7.9</span></h1>
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
                        <Carousel CatTitle="More Like This" movies={MOVIES} />
                    </div>
                </div>

                <Footer />
            </div>

        </div >
    )
}

export default Show