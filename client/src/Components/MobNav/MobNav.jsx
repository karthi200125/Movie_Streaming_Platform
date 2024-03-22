import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GoHomeFill } from 'react-icons/go'
import { IoIosLogOut } from "react-icons/io"
import { LuSearch } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/AuthSlice'
import './MobNav.scss'

const MobNav = () => {

    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const location = useLocation()
    const pathname = location.pathname

    return (
        <div className='mobnavcon'>
            <Link to={'/'} className={`mobnav ${pathname === '/' && "activemobnav"}`}><GoHomeFill size={20} /></Link>
            <Link to={'/search'} className={`mobnav ${pathname === '/search' && "activemobnav"}`}><LuSearch size={20} /></Link>
            <Link to={'/profile'} className={`mobnav ${pathname === '/profile' && "activemobnav"}`}><CgProfile size={20} /></Link>
            <Link to={'/category'} className={`mobnav ${pathname === '/category' && "activemobnav"}`}><BsFillGrid1X2Fill size={15} /></Link>
            {user &&
                <Link to={'/'} className={`mobnav`}><IoIosLogOut size={20} onClick={handleLogout} /></Link>
            }
        </div>
    )
}

export default MobNav
