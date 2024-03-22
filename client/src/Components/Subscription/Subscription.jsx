import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Subscription.scss'
import logo from '../../Assets/logo.png'
import { FaCheck } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const Subscription = () => {

    return (
        <div className='subscriptioncon'>
            <div className="subleft">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="" className='logoimg' />
                    <div className="logonname">₣ƗŁΜ₣ŁØŴ</div>
                </Link>
                <h1>Subscribe and Now Start Streaming</h1>
            </div>
            <div className="subright">
                <div className="plans">
                    <div className="item">
                        <div className="top">
                            Basic
                        </div>
                        <div className="content">
                            <h1>Feautures Include</h1>
                            <ul className="features">
                                <li><FaCheck className='check' /> 1 user</li>
                                <li><FaCheck className='check' /> Watch Only Free Movies</li>
                                <li><FaCheck className='check' />max Video Quality 480px</li>
                                <li><GrClose className='no' /> Subscription Movies</li>
                                <li><GrClose className='no' /> Laptop and Television </li>
                                <li><GrClose className='no' /> Early Access</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="top pre">
                            Premium
                        </div>
                        <div className="content">
                            <h1>Feautures Include</h1>
                            <ul className="features">
                                <li><FaCheck className='check' /> 2 users</li>
                                <li><FaCheck className='check' /> Watch All Movies</li>
                                <li><FaCheck className='check' /> max Video Quality 1080p</li>
                                <li><FaCheck className='check' /> All Device support</li>
                                <li><FaCheck className='check' /> Max audio Quality Dolby Atoms</li>
                                <li><FaCheck className='check' /> Early Access</li>
                            </ul>
                        </div>
                        <Button >Continue with ₹ 149 /Month</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription