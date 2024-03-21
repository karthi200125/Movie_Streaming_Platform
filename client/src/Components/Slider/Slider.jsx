import { Link } from 'react-router-dom';
import Mcard from '../Mcard/Mcard';
import { McardSkeleton } from '../Skeletons/Skeletons';
import './Slider.scss';


const Slider = ({ sTitle, sGenre, sMovies, otherMovies, isLoading }) => {

    return (
        <div className="slidercon">
            <div className="slidetop">
                <div className="slidertitle">{sTitle}</div>
                <Link to={'/category'} state={sGenre} className="viewalltext">viewall <span>{">"}</span></Link>
            </div>
            {isLoading ?
                <McardSkeleton slide count={5} />
                :
                <div className='slider'>
                    {!otherMovies ?
                        sMovies?.slice(0, 10).map((movie, index) => {
                            const hasSameGenre = movie?.genres?.some(
                                (genre) => genre.toLowerCase() === sGenre.toLowerCase()
                            );
                            if (!hasSameGenre) {
                                return null;
                            }
                            return (
                                <Mcard key={index} movie={movie} />
                            );
                        })
                        :
                        otherMovies?.slice(0, 10).map((movie, index) => {
                            return (
                                <Mcard key={index} movie={movie} />
                            );
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Slider;
