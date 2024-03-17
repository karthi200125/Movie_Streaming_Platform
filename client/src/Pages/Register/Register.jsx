import React, { useState } from 'react';
import loginimg from '../../Assets/login.jpg';
import Button from '../../Components/Button/Button';
import Image from '../../Components/Image/Image';
import { AxiosRequest } from '../../Utils/Axiosrequest';
import './Register.scss';

const Register = ({ onRegClose, onLogOpen }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async () => {
        let isValid = true;
        if (!inputs.username) {
            setUsernameError('Username is required');
            isValid = false;
        } else {
            setUsernameError('');
        }
        if (!inputs.email) {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!inputs.password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (isValid) {
            try {
                setIsLoading(true);
                const res = await AxiosRequest.post('/auth/register', { inputs })
                onRegClose(true)
                onLogOpen(true)
                console.log(res.data)
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const loginmodelopen = () => {
        onRegClose(true)
        onLogOpen(true)
    }


    return (
        <div className='register'>
            <div className="regleftcon rs">
                <Image src={loginimg} alt="login image" cs="logimg" w="100%" h="430px" br="10px" />
            </div>
            <div className="regright">
                <h1>Register</h1>
                <p>Welcome Back</p>
                <input type="text" name="username" placeholder="Username" className={usernameError ? "inputerr" : "regloginput"} required onChange={handleChange} />
                {usernameError && <div className="inputerrtext">{usernameError}</div>}
                <input type="email" name="email" placeholder="Email Address" className={emailError ? "inputerr" : "regloginput"} required onChange={handleChange} />
                {emailError && <div className="inputerrtext">{emailError}</div>}
                <input type="password" name="password" placeholder="Password" className={passwordError ? "inputerr" : "regloginput"} required onChange={handleChange} />
                {passwordError && <div className="inputerrtext">{passwordError}</div>}
                <div className="showpass">
                    <input type="checkbox" />
                    <span className="showpasstext">Show Password</span>
                </div>
                <Button isloading={isLoading} bg onClick={handleRegister}>Register</Button>
                <p className="already" onClick={loginmodelopen}>Already Have An Account? <span>Login</span></p>
            </div>
        </div>
    );
};

export default Register;
