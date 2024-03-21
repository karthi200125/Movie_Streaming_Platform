import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import Image from '../../../Components/Image/Image'
import Info from '../../../Components/Info/Info'
import VideoPlayer from '../../Show/VideoPlayer/VideoPlayer'
import Header from '../Header/Header'
import './MovieSlide.scss'

const MovieSlide = ({ movies, isLoading }) => {
  const [watch, setWatch] = useState(false)
  const [preview, setPreview] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)
  const [next, setnext] = useState(false)

  const user = useSelector((state) => state.user.user)

  // settiem out for moviepreview
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreview(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [refreshKey])

  // thumnail arrow click
  const handleItemClick = (movie) => {
    setCurrentIndex(movie.id)
    setRefreshKey(prevKey => prevKey + 1)
    setPreview(true)
    setnext(true)
  }

  const arrowClick = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((currentIndex + 1) % movies.length)
      setnext(true)
    } else if (direction === 'prev') {
      setCurrentIndex((currentIndex - 1 + movies.length) % movies.length)
      setnext(true)
    }
    setRefreshKey(prevKey => prevKey + 1)
    setPreview(true)
  }

  return (
    <div className='movieslide' key={refreshKey}>
      <Header />
      {watch && <VideoPlayer onBack={() => setWatch(false)} movie={movies[currentIndex]} />}

      <div className="mobilemovieinfo">
        <img src={movies[currentIndex]?.thumpnailImg} alt="" />
        <div className="mobarrows">
          <button id="prev" onClick={() => arrowClick('prev')}>{"<"}</button>
          <button id="next" onClick={() => arrowClick('next')}>{">"}</button>
        </div>
        <div className="mobshowcontent showmob">
          <Info onOpen={() => setWatch(true)} movie={movies[currentIndex]} isLoading={isLoading} />
        </div>
      </div>

      <div className="movieinfo">
        {preview ?
          <div className={`imgcon ${next && 'nextimg'}`}>
            <img src={movies[currentIndex]?.thumpnailImg ? movies[currentIndex]?.thumpnailImg : movies[currentIndex]?.thumpnailImg} alt="" className='mainimage' />
          </div>
          :
          <div className="videocon">
            <ReactPlayer url={movies[currentIndex]?.moviePreview} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} loop={true} />
          </div>
        }

        <div className="showcontent homemoviecontent">
          <Info onOpen={() => setWatch(true)} movie={movies[currentIndex]} isLoading={isLoading} />
        </div>
      </div>

      <div className="thumbnail">
        <div className="arrows">
          <button id="prev" onClick={() => arrowClick('prev')}>{"<"}</button>
          <button id="next" onClick={() => arrowClick('next')}>{">"}</button>
        </div>
        {movies.map((movie, index) => (
          <div className={`item ${currentIndex === index && "activeitem"}`} key={index} onClick={() => handleItemClick(movie)}>
            <Image src={movie?.thumpnailImg} alt={movie?.movieTitle} cs="thumbnailimg" />
          </div>
        )).slice(0, 4)}
      </div>
    </div>
  )
}

export default MovieSlide
