import { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Model from '../../../Components/Model/Model';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import './Header.scss';
import { useSelector } from 'react-redux';
import logo from '../../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [regOpen, setRegOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const user = useSelector((state) => state?.user?.user)

    const handleRegOpen = () => {
        setRegOpen(true);
    };

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    return (
        <div className='headerlog'>
            <Link to={'/'} className="logo">
                <img src={logo} alt="" className='logoimg' />
                {user?.isSub && <h1 className='premium'>Pro</h1>}
                {/* <p className='logotext'>StarMa</p> */}
            </Link>
            {!user &&
                <div className="ri">
                    <Model onOpen={regOpen} onClose={() => setRegOpen(false)}
                        bodycontent={<Register onLogOpen={() => setLoginOpen(true)} onRegClose={() => setRegOpen(false)} />} />
                    <Model onOpen={loginOpen} onClose={() => setLoginOpen(false)} bodycontent={<Login onLogClose={() => setLoginOpen(false)} onRegOpen={() => setRegOpen(true)} />} />
                    <Button onClick={handleRegOpen}>Sign Up</Button>
                    <Button bg onClick={handleLoginOpen}>Login</Button>
                </div>
            }
        </div>
    );
};

export default Header;
