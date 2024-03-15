import './Profile.scss'
import Button from '../../Components/Button/Button'
import { FiEdit2 } from "react-icons/fi";
import test from '../../Assets/avatar.jpg'
import Footer from '../../Components/Footer/Footer'
import Carousel from '../../Components/Carousel/Carousel';
import { MOVIES } from '../../dummy';
import Model from '../../Components/Model/Model';

const Profile = () => {
    return (
        <div className='profilecon'>            
            <div className="protop">
                <Button bg="linear-gradient(to right, #f3e96f, #947303, #ceb349)">Upgrade Subscription</Button>
            </div>
            <div className="proinfo">
                <div className="pileft">
                    <img src={test} alt="" className='profileimg' />
                    <div className="profileinfo">
                        <h1>Karthikeyan</h1>
                        <p>7904653176</p>
                    </div>
                </div>
                <div className="piright">
                    <FiEdit2 size={20} />
                    <span>Edit</span>
                </div>

            </div>
            <Carousel CatTitle="Watch History" movies={MOVIES} />
            <Footer />
        </div>
    )
}

export default Profile