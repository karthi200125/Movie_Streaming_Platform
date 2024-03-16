import ReactPlayer from 'react-player';
import './VideoPlayer.scss';
import { IoIosArrowRoundBack } from 'react-icons/io';

const VideoPlayer = ({ onBack, movie }) => {

  return (
    <div className="player-wrapper">
      <div className="back" onClick={() => onBack(false)}>
        <IoIosArrowRoundBack className="backicon" />
        <span>Back</span>
      </div>
      {movie?.movieUrl ?
        <ReactPlayer
          url={movie?.movieUrl}
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          volume={true}
        />
        :
        <div className="notavailable">
          <span>{`"${movie?.title}"`}</span>
          <p>This Movie Currently Not Available</p>
        </div>
      }
    </div>
  );
};

export default VideoPlayer;
