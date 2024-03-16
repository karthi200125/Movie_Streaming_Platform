import { useState } from 'react'
import Button from '../../Components/Button/Button'
import './Login.scss'
import loginimg from '../../Assets/login.jpg'
import Image from '../../Components/Image/Image'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    return (
        <div className='register'>
            <div className="regleftcon">
                <Image src={loginimg} alt={"login image"} cs="logimg" w={'100%'} h={'410px'} br={'10px'} />
            </div>
            <div className="regright">
                <h1>Login</h1>
                <p>Welcome Back</p>
                <input type="text" placeholder='Email Address' className={emailError ? "inputerr" : "regloginput"} required />
                {emailError && <div className="inputerrtext">Email Error</div>}
                <input type={showPassword ? "text" : "password"} placeholder='Password' className={passwordError ? "inputerr" : 'regloginput'} required />
                {passwordError && <div className="inputerrtext">Password Error</div>}
                <div className="showpass">
                    <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
                    <span className='showpasstext'>Show Password</span>
                </div>
                <Button isloading={true} bg>Login</Button>
                <p className='already'>Create a New Account <span>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Login