import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Footer from '../../Components/Footer/Footer';
import MovieCards from '../../Components/MovieCards/MovieCards';
import { GetMovie } from '../../GetMovie';
import { MoviesData } from '../../MoviesData';
import './Search.scss';

const Search = () => {

  const allmovies = MoviesData.map((movie) => {
    const data = GetMovie({ movieTitle: movie?.title });
    return { ...movie, ...data };
  });

  const [Query, setQuery] = useState('')

  const searchMovies = allmovies?.filter((movie) => movie?.title?.toLowerCase().includes(Query.toLowerCase()));

  return (
    <div className='searchcon'>
      <div className="searchboxcon">
        <div className="search">
          <CiSearch size={30} />
          <input type="text" placeholder='Movies & shows and more' onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <MovieCards movies={searchMovies} />
      <Footer />
    </div>
  )
}

export default Search