import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Info from '../../../Components/Info/Info'
import { MOVIES } from '../../../dummy'
import VideoPlayer from '../../Show/VideoPlayer/VideoPlayer'
import Header from '../Header/Header'
import './MovieSlide.scss'

const MovieSlide = () => {
  const [watch, setWatch] = useState(false)
  const [preview, setPreview] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)
  const [next, setnext] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreview(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [refreshKey]);

  const handleItemClick = (movie) => {
    setCurrentIndex(movie.id)
    setRefreshKey(prevKey => prevKey + 1)
    setPreview(true)
    setnext(true)
  }

  const arrowClick = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((currentIndex + 1) % MOVIES.length)
      setnext(true)
    } else if (direction === 'prev') {
      setCurrentIndex((currentIndex - 1 + MOVIES.length) % MOVIES.length)
      setnext(true)
    }
    setRefreshKey(prevKey => prevKey + 1)
    setPreview(true)
  }

  return (
    <div className='movieslide' key={refreshKey}>
      <Header />
      {watch && <VideoPlayer onBack={() => setWatch(false)} movie={MOVIES[currentIndex]} />}

      <div className="mobilemovieinfo">
        <img src={MOVIES[currentIndex].img} alt="" />
        <div className="mobshowcontent showmob">
          <Info onOpen={() => setWatch(true)} movie={MOVIES[currentIndex]} />
        </div>
      </div>

      <div className="movieinfo">
        {preview ?
          <div className={`imgcon ${next && 'nextimg'}`}>
            <img src={MOVIES[currentIndex].img} alt="" className='mainimage' />
          </div>
          :
          <div className="videocon">
            <ReactPlayer url={MOVIES[currentIndex]?.tailer} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} />
          </div>
        }

        <div className="showcontent homemoviecontent">
          <Info onOpen={() => setWatch(true)} movie={MOVIES[currentIndex]} />
        </div>
      </div>

      <div className="thumbnail">
        <div className="arrows">
          <button id="prev" onClick={() => arrowClick('prev')}>{"<"}</button>
          <button id="next" onClick={() => arrowClick('next')}>{">"}</button>
        </div>
        {MOVIES.map((movie, index) => (
          <div className={`item ${currentIndex === index && "activeitem"}`} key={movie.id} onClick={() => handleItemClick(movie)}>
            <img src={movie.img} alt={movie.name} className='thumbnailimg' />
          </div>
        )).slice(0, 4)}
      </div>
    </div>
  )
}

export default MovieSlide
