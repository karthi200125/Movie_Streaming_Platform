import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Footer from '../../Components/Footer/Footer';
import MovieCards from '../../Components/MovieCards/MovieCards';
import useGetMovies from '../../Utils/GetAllMovies';
import './Search.scss';
import { useSelector } from 'react-redux';
import DocTitle from '../../Components/Title';

const Search = () => {
  const user = useSelector((state) => state.user)
  const { moviesData, isLoading } = useGetMovies();

  const [Query, setQuery] = useState('')
  const searchMovies = moviesData?.filter((movie) => movie?.movieTitle?.toLowerCase().includes(Query.toLowerCase()));

  return (
    <div className='searchcon' style={{ paddingTop: !user ? "20px" : "100px" }}>
      <DocTitle title={`Search Page ${Query && `"${Query}"`}`} />
      <div className="searchboxcon">
        <div className="search">
          <CiSearch size={30} />
          <input type="text" placeholder='Movies & shows and more' onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <MovieCards movies={searchMovies} isLoading={isLoading} />
      <Footer />
    </div>
  )
}

export default Search