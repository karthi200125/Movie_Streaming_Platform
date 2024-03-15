import { useState } from 'react';
import './Category.scss'
import MovieCards from '../../Components/MovieCards/MovieCards';
import Footer from '../../Components/Footer/Footer';

const Category = () => {

  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"];
  const Languages = ["English", "Hindi", "Tamil", "Telugu", "Malayalam"]
  const Trends = ["Latest", "Hot", "Rating",]

  const [genre, setGenre] = useState(genres[0])
  const [Language, setLanguage] = useState(Languages[0])
  const [Trend, setTrend] = useState(Trends[0])

  console.log(genre)

  return (
    <div className='category'>
      <h1 className="categorytitle">Category</h1>
      <div className="categoriesbtns">
        {Trends.map((tre) => (
          <button key={tre} onClick={() => setTrend(tre)} className={Trend === tre && "activebtn"}>{tre}</button>
        ))}
      </div>
      <div className="categoriesbtns">
        {genres.map((gen) => (
          <button key={gen} onClick={() => setGenre(gen)} className={genre === gen && "activebtn"}>{gen}</button>
        ))}
      </div>
      <div className="categoriesbtns">
        {Languages.map((lan) => (
          <button key={lan} onClick={() => setLanguage(lan)} className={Language === lan && "activebtn"}>{lan}</button>
        ))}
      </div>
      <span className='catline'></span>

      <MovieCards />
      <Footer />

    </div>
  )
}

export default Category