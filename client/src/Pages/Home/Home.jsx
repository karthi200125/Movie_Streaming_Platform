import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import DocTitle from '../../Components/Title'
import useGetMovies from '../../Utils/GetAllMovies'
import './Home.scss'
import MovieSlide from './MovieSlide/MovieSlide'


const Home = () => {
    
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