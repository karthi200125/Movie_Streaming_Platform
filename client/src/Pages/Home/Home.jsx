import Footer from '../../Components/Footer/Footer'
import CategoryCarasol from './CategoryCarasol/CategoryCarasol'
import './Home.scss'
import MovieSlide from './MovieSlide/MovieSlide'

const Home = () => {
    return (
        <div className='home'>
            <MovieSlide />
            <CategoryCarasol />
            <Footer />
        </div>
    )
}

export default Home