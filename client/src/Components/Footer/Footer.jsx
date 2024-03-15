import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import apple from '../../Assets/apple.png'
import play from '../../Assets/play.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <ul className='footeritem'>
          <h1>Company</h1>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className='footeritem'>
          <h1>View Website In</h1>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className='footeritem'>
          <h1>Need help?</h1>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className='footeritem'>
          <h1>Connect With us</h1>
          <li className="footericons">
            <FaFacebookF className='footericon' />
            <FaTwitter className='footericon' />
          </li>
        </ul>
      </div>
      <div className="btm">
        <div className="left">
          <p>2024 All Rights reserved</p>
          <p>Terms of Use FAQ privacy policy</p>
        </div>
        <div className="right">
          <img src={apple} alt="" />
          <img src={play} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer