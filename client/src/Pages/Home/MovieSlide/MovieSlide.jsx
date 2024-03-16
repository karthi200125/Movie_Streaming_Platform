import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Info from '../../../Components/Info/Info'
import { GetMovie } from '../../../GetMovie'
import { MoviesData } from '../../../MoviesData'
import { MOVIES } from '../../../dummy'
import VideoPlayer from '../../Show/VideoPlayer/VideoPlayer'
import Header from '../Header/Header'
import './MovieSlide.scss'
import Image from '../../../Components/Image/Image'

const MovieSlide = () => {
  const [watch, setWatch] = useState(false)
  const [preview, setPreview] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)
  const [next, setnext] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const slideMovies = MoviesData.map((movie) => {
    const data = GetMovie({ movieTitle: movie?.title });
    return { ...movie, ...data };
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideMovies[currentIndex]?.MoviePreview) {
        setPreview(false);
      } else {
        setPreview(true);
      }
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
      setCurrentIndex((currentIndex + 1) % slideMovies.length)
      setnext(true)
    } else if (direction === 'prev') {
      setCurrentIndex((currentIndex - 1 + slideMovies.length) % MOVIES.length)
      setnext(true)
    }
    setRefreshKey(prevKey => prevKey + 1)
    setPreview(true)
  }

  const isSub = false

  return (
    <div className='movieslide' key={refreshKey}>
      <Header />

      {isSub ?
        watch && <VideoPlayer onBack={() => setWatch(false)} movie={slideMovies[currentIndex]} />
        :
        ""
      }

      <div className="mobilemovieinfo">
        <img src={slideMovies[currentIndex]?.posterImage} alt="" />
        <div className="mobshowcontent showmob">
          <Info onOpen={() => setWatch(true)} movie={slideMovies[currentIndex]} />
        </div>
      </div>

      <div className="movieinfo">
        {preview ?
          <div className={`imgcon ${next && 'nextimg'}`}>
            <img src={slideMovies[currentIndex]?.MovieImg ? slideMovies[currentIndex]?.MovieImg : slideMovies[currentIndex]?.posterImage} alt="" className='mainimage' />
          </div>
          :
          <div className="videocon">
            <ReactPlayer url={slideMovies[currentIndex]?.MoviePreview} playing={true} width='100vw' height='100vh' style={{ position: 'absolute', top: 0, left: 0 }} muted={true} loop={true} />
          </div>
        }

        <div className="showcontent homemoviecontent">
          <Info onOpen={() => setWatch(true)} movie={slideMovies[currentIndex]} isLoading={isLoading} />
        </div>
      </div>

      <div className="thumbnail">
        <div className="arrows">
          <button id="prev" onClick={() => arrowClick('prev')}>{"<"}</button>
          <button id="next" onClick={() => arrowClick('next')}>{">"}</button>
        </div>
        {slideMovies.map((movie, index) => (
          <div className={`item ${currentIndex === index && "activeitem"}`} key={movie.id} onClick={() => handleItemClick(movie)}>
            <Image src={movie?.posterImage} alt={movie?.title} cs="thumbnailimg" w={'100%'} h={'100%'} br={'20px'} />
          </div>
        )).slice(0, 4)}
      </div>
    </div>
  )
}

export default MovieSlide
