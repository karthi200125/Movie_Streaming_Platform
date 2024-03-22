import ReactPlayer from 'react-player';
import './VideoPlayer.scss';
import { IoIosArrowRoundBack } from 'react-icons/io';
import DocTitle from '../../../Components/Title';

const VideoPlayer = ({ onBack, movie }) => {

  return (
    <div className="player-wrapper">
      <DocTitle title={`${movie?.movieTitle}`} />
      <div className="back" onClick={() => onBack(false)}>
        <IoIosArrowRoundBack className="backicon" />
        <span>Back</span>
      </div>
      
      {movie?.movieVideo ?
        <ReactPlayer
          url={movie?.movieVideo}
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          volume={true}
          // playing={true}
        />
        :
        <div className="notavailable">
          <span>{`"${movie?.movieTitle}"`}</span>
          <p>This Movie Currently Not Available</p>
        </div>
      }
    </div>
  );
};

export default VideoPlayer;
