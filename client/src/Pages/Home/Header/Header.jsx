import { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Model from '../../../Components/Model/Model';
import './Header.scss';
import Register from '../../Register/Register';
import Login from '../../Login/Login';

const Header = () => {
    const [regOpen, setRegOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const handleRegOpen = () => {
        setRegOpen(true);
    };

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    return (
        <div className='headerlog'>
            <div className="logo">
                logo
            </div>
            <div className="ri">
                <Model onOpen={regOpen} onClose={() => setRegOpen(false)} bodycontent={<Register />} />
                <Model onOpen={loginOpen} onClose={() => setLoginOpen(false)} bodycontent={<Login />} />
                <Button onClick={handleRegOpen}>Sign Up</Button>
                <Button bg onClick={handleLoginOpen}>Login</Button>
            </div>
        </div>
    );
};

export default Header;
