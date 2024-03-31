import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Subscription.scss';
import logo from '../../Assets/logo.png';
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import AxiosRequest from '../../Utils/Axiosrequest'
import { useState } from 'react';

const Subscription = () => {
    const user = useSelector(state => state.user.user);

    const [isLaoding, setisLaoding] = useState(false)

    const stripePromise = loadStripe('pk_test_51ObHAQSFUNMmDRyleKnltPLDHXVOJpPyQVP63PnU8C2hDoPVAoxfBPF6WHkPAJ9ID6HW3mfJwKcQH13FPX9oYAIl008RYSyIWV');
    const price = 149;

    const HandleCard = async () => {
        try {
            setisLaoding(true)
            const stripe = await stripePromise
            const res = await AxiosRequest.put('/auth/stripe', { user, price });
            await stripe.redirectToCheckout({
                sessionId: res.data
            })
            const updateissub = await AxiosRequest.put('/auth/issubupdate', { user });
            console.log(updateissub.data);
        } catch (error) {
            console.log(error);
        } finally {
            setisLaoding(false)
        }
    };

    console.log(isLaoding)

    return (
        <div className='subscriptioncon'>
            <div className="subleft">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="" className='logoimg' />
                    <div className="logonname">₣ƗŁΜ₣ŁØŴ</div>
                </Link>
                <h1>Subscribe and Start Streaming Now</h1>
            </div>
            <div className="subright">
                <div className="plans">
                    <div className="item">
                        <div className="top">Basic</div>
                        <div className="content">
                            <h1>Features Include</h1>
                            <ul className="features">
                                <li><FaCheck className='check' /> 1 user</li>
                                <li><FaCheck className='check' /> Watch Only Free Movies</li>
                                <li><FaCheck className='check' /> Max Video Quality 480p</li>
                                <li><GrClose className='no' /> Subscription Movies</li>
                                <li><GrClose className='no' /> Laptop and Television</li>
                                <li><GrClose className='no' /> Early Access</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="top pre">Premium</div>
                        <div className="content">
                            <h1>Features Include</h1>
                            <ul className="features">
                                <li><FaCheck className='check' /> 2 users</li>
                                <li><FaCheck className='check' /> Watch All Movies</li>
                                <li><FaCheck className='check' /> Max Video Quality 1080p</li>
                                <li><FaCheck className='check' /> All Device Support</li>
                                <li><FaCheck className='check' /> Max Audio Quality Dolby Atmos</li>
                                <li><FaCheck className='check' /> Early Access</li>
                            </ul>
                        </div>
                        <Button onClick={HandleCard} isLaoding={isLaoding}>Continue with ₹ 149 / Month</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
