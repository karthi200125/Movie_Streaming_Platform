import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const location = useLocation()
  const pathname = location.pathname

  const isSub = true
  const user = true

  return (
    <div className='sidebarcon'>
      <div className="sidebar">
        <Link to={'/profile'} className={`${isSub && "prouser"} route ${pathname === "/profile" && "activeroute"} `}>
          {user ?
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="usericon" />
            :
            <CgProfile size={25} className='routeicon' />
          }
          <span className='routename' >Profile</span>
          {/* {isSub && <div className="pro">Pro</div>} */}
        </Link>
        <Link to={'/search'} className={`route ${pathname === "/search" && "activeroute"}`}>
          <LuSearch size={25} className='routeicon' />
          <span className='routename' >Search</span>
        </Link>
        <Link to={'/'} className={`route ${pathname === "/" && "activeroute"}`}>
          <GoHomeFill size={25} className='routeicon' />
          <span className='routename' >Home</span>
        </Link>
        <Link to={'/category'} className={`route ${pathname === "/category" && "activeroute"}`}>
          <BsFillGrid1X2Fill size={20} className='routeicon' />
          <span className='routename' >Category</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar