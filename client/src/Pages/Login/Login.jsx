import { useState } from 'react'
import Button from '../../Components/Button/Button'
import './Login.scss'
import loginimg from '../../Assets/login.jpg'
import Image from '../../Components/Image/Image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/AuthSlice'

const Login = ({ onLogClose, onRegOpen }) => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async () => {
        let isValid = true;
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
                const res = await axios.post('http://localhost:8800/api/auth/login', { inputs })
                onLogClose(true)
                dispatch(login(res.data))                
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };



    const regmodelopen = () => {
        onLogClose(true)
        onRegOpen(true)
    }

    return (
        <div className='register'>
            <div className="regleftcon">
                <Image src={loginimg} alt={"login image"} cs="logimg" w={'100%'} h={'410px'} br={'10px'} />
            </div>
            <div className="regright">
                <h1>Login</h1>
                <p>Welcome Back</p>
                <input type="text" name='email' placeholder='Email Address' className={emailError ? "inputerr" : "regloginput"} required onChange={handleChange} />
                {emailError && <div className="inputerrtext">Email Error</div>}
                <input type={showPassword ? "text" : "password"} name='password' placeholder='Password' className={passwordError ? "inputerr" : 'regloginput'} required onChange={handleChange} />
                {passwordError && <div className="inputerrtext">Password Error</div>}
                <div className="showpass">
                    <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
                    <span className='showpasstext'>Show Password</span>
                </div>
                <Button isloading={isloading} onClick={handleRegister} bg>Login</Button>
                <p className='already' onClick={regmodelopen}>Create a New Account <span>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Login