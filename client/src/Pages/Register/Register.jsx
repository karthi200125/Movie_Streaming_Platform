import './Register.scss'
import Button from '../../Components/Button/Button'
import Image from '../../Components/Image/Image'
import loginimg from '../../Assets/login.jpg'

const Register = () => {
    return (
        <div className='register'>
            <div className="regleftcon rs">
                <Image src={loginimg} alt={"login image"} cs="logimg" w={'100%'} h={'100%'} br={'10px'} />
            </div>
            <div className="regright">
                <h1>Register</h1>
                <p>Welcome Back</p>
                <input type="text" placeholder='UserName' className='regloginput' />
                <input type="text" placeholder='Email Address' className='regloginput' />
                <input type="password" placeholder='Password' className='regloginput' />
                <div className="showpass">
                    <input type="checkbox" />
                    <span className='showpasstext'>Show Password</span>
                </div>
                <Button isloading={true} bg>Register</Button>
                <p className='already'>Alreay Have An Accounr <span>Login</span></p>
            </div>
        </div>
    )
}

export default Register