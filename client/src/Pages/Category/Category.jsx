import { useState } from 'react';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import MovieCards from '../../Components/MovieCards/MovieCards';
import useGetMovies from '../../Utils/GetAllMovies';
import './Category.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DocTitle from '../../Components/Title';

const Category = () => {

  const user = useSelector((state) => state.user)

  const location = useLocation()
  const slidercat = location.state

  const genres = ["Drama", "Adventure", "Comedy", "Action", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];
  const Languages = ["English", "हिन्दी", "தமிழ்", "తెలుగు"];
  const Trends = ["Latest", "Hot", "Rating"];

  const { moviesData, isLoading } = useGetMovies();

  const [genre, setGenre] = useState(slidercat || '');
  const [Language, setLanguage] = useState('');
  const [Trend, setTrend] = useState(Trends[0]);

  const CatMovies = moviesData?.filter((movie) => {
    const genreMatch = genre && movie?.genres?.some(gen => gen?.toLowerCase() === genre.toLowerCase());
    const languageMatch = Language && movie?.languages?.some(lan => lan?.toLowerCase() === Language.toLowerCase());
    return (!genre || genreMatch) && (!Language || languageMatch);
  });

  const HandleReset = () => {
    setGenre("");
    setLanguage("");
    setTrend("");
  };

  return (
    <div className='category'>
      <DocTitle title={`Categories ${genre && `| "${genre}"`}`} />
      <h1 className="categorytitle" style={{ marginTop: user ? "10px" : "100px" }}>Category</h1>
      <div className="categoriesbtns">
        {Trends.map((tre) => (
          <button key={tre} onClick={() => setTrend(tre)} className={Trend === tre && "activebtn"}>{tre}</button>
        ))}
      </div>
      <div className="categoriesbtns">
        <button className={genre === '' && 'activebtn'} onClick={() => setGenre('')}>All</button>
        {genres.map((gen) => (
          <button key={gen} onClick={() => setGenre(gen)} className={genre === gen && "activebtn"}>{gen}</button>
        ))}
      </div>
      <div className="categoriesbtns">
        <button className={Language === '' && 'activebtn'} onClick={() => setLanguage('')}>All</button>
        {Languages.map((lan) => (
          <button key={lan} onClick={() => setLanguage(lan)} className={Language === lan && "activebtn"}>{lan}</button>
        ))}
      </div>
      <span className='catline'></span>
      {CatMovies?.length > 0 ?
        <MovieCards movies={CatMovies} isLoading={isLoading} />
        :
        <div className="noresult">
          <h1>"No Movies Found"</h1>
          <Button onClick={HandleReset} bg>Reset Everything</Button>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Category;
