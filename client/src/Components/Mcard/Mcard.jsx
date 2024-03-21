import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import './Mcard.scss';

const Mcard = ({ key, movie }) => {
    const user = useSelector((state) => state.user.user);
    const [isHovered, setIsHovered] = useState(false);

    const singlerating = Math.floor(movie?.rating)    

    return (
        <Link
            to={'/show'}
            state={movie}
            key={key}
            className='mcardcon'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!user?.isSub &&
                <div className={`free ${user?.isSub ? '' : movie?.isFree ? "free" : 'sub'}`}>
                    <span>{user?.isSub ? 'FREE' : movie?.isFree ? "FREE" : 'PRE'}</span>
                </div>
            }


            <div className="circlerating">
                <CircularProgressbar
                    value={singlerating}
                    maxValue={10}
                    text={`${singlerating ? singlerating : 0}`}
                    styles={buildStyles({
                        pathColor: singlerating < 5 ? 'red' : singlerating < 7 ? 'orange' : 'green'
                    })}
                />
            </div>



            <div className="mcardgenres">
                {movie?.genres?.map((gen) => (
                    <div className="mcardgenre" key={gen}>{gen}</div>
                ))}
            </div>

            {isHovered ?
                <div className="mcardvideocon">
                    <ReactPlayer
                        width={'100%'}
                        height={'100%'}
                        className="mcardvideo"
                        url={movie?.moviePreview}
                        muted={true}
                        loop={true}
                        playing={isHovered ? true : false}
                    />
                </div>
                :
                <Image src={movie?.thumpnailImg} alt={movie?.movieTitle} cs="mcardimg" />
            }
        </Link>
    );
};

export default Mcard;
