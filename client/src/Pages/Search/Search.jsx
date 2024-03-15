import MovieCards from '../../Components/MovieCards/MovieCards';
import './Search.scss'
import { CiSearch } from "react-icons/ci";
import Footer from '../../Components/Footer/Footer'
import { GetMovie } from '../../GetMovie';

const Search = () => {

  return (
    <div className='searchcon'>
      <div className="searchboxcon">
        <div className="search">
          <CiSearch size={30} />
          <input type="text" placeholder='Movies & shows and more' />
        </div>
      </div>
      <MovieCards />
      <Footer />
    </div>
  )
}

export default Search