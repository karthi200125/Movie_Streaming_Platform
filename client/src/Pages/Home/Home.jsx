import { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import AxiosRequest from '../../Utils/Axiosrequest'
import './Home.scss'
import MovieSlide from './MovieSlide/MovieSlide'
import useGetMovies from '../../Utils/GetAllMovies'
import DocTitle from '../../Components/Title'


const Home = () => {

    const [allMovies, setallMovies] = useState([])
    useEffect(() => {
        const GetAllMovies = async () => {
            try {
                const res = await AxiosRequest.get('/movie/getmovies')
                setallMovies(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        GetAllMovies()
    }, [])

    const { moviesData, isLoading } = useGetMovies();

    return (
        <div className='home'>
            <DocTitle title={`Home Page | ₣ƗŁΜ₣ŁØŴ`} />
            <MovieSlide movies={moviesData} isLoading={isLoading} />
            <Slider sMovies={moviesData} sTitle="Drama" sGenre="Drama" isLoading={isLoading} />
            <Slider sMovies={moviesData} sTitle="Adventure" sGenre="Adventure" isLoading={isLoading} />
            <Slider sMovies={moviesData} sTitle="Thriller" sGenre="Thriller" isLoading={isLoading} />
            <Footer />
        </div>
    )
}

export default Home