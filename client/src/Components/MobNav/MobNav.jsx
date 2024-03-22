import { Link, useLocation, useNavigate } from 'react-router-dom'
import './MobNav.scss'
import { CgProfile } from 'react-icons/cg'
import { LuSearch } from 'react-icons/lu'
import { GoHomeFill } from 'react-icons/go'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/AuthSlice'

const MobNav = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hanldeLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const mobnavitems = [
        { name: "Profile", href: '/profile', icon: <CgProfile size={20} /> },
        { name: "Search", href: '/search', icon: <LuSearch size={20} /> },
        { name: "Home", href: '/', icon: <GoHomeFill size={20} /> },
        { name: "Category", href: '/category', icon: <BsFillGrid1X2Fill size={15} /> },
        { name: "Logout", href: '', icon: <IoIosLogOut size={20} onClick={hanldeLogout} /> },
    ]

    const location = useLocation()
    const pathname = location.pathname

    return (
        <div className='mobnavcon'>
            {mobnavitems.map((mnav, i) => (
                <Link to={mnav.href} key={i} className={`mobnav ${pathname === mnav.href && "activemobnav"}`}>
                    {mnav.icon}
                </Link>
            ))}
        </div>
    )
}

export default MobNav