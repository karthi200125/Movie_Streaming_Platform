import { useState } from 'react'
import Button from '../../Components/Button/Button'
import './Login.scss'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='register'>
            <div className="regleftcon">
                <img src="" alt="" />
            </div>
            <div className="regright">
                <h1>Login</h1>
                <p>Welcome Back</p>
                <input type="text" placeholder='Email Address' className='regloginput' />
                <input type={showPassword ? "text" : "password"} placeholder='Password' className='regloginput' />
                <div className="showpass">
                    <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
                    <span>Show Password</span>
                </div>
                <Button isloading={true} bg>Login</Button>
                <p className='already'>Create a New Accounr <span>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Login