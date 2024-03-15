import ReactPlayer from 'react-player'
import './VideoPlayer.scss'
import { IoIosArrowRoundBack } from "react-icons/io";

const VideoPlayer = ({ onBack, movie }) => {

  return (
    <div className="player-wrapper">
      <div className="back" onClick={() => onBack(false)}>
        <IoIosArrowRoundBack className='backicon' />
        <span>Back</span>
      </div>
      <ReactPlayer
        url={movie?.tailer}
        className="react-player"
        width="100%"
        height="100%"
        controls
        volume={true}
      />
    </div>
  )
}

export default VideoPlayer