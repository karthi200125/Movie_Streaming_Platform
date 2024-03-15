import Carousel from '../../../Components/Carousel/Carousel'
import { MoviesData } from '../../../MoviesData'
import './CategoryCarasol.scss'

const CategoryCarasol = () => {
    return (
        <div className='homecategory'>
            <Carousel CatTitle="Thriller" movies={MoviesData} />
            <Carousel CatTitle="Crime" movies={MoviesData} />
            <Carousel CatTitle="Drama" movies={MoviesData} />
        </div>
    )
}

export default CategoryCarasol