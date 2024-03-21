import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import Image from "../Image/Image";

const Sidebar = () => {

  const location = useLocation()
  const pathname = location.pathname
  const user = useSelector((state) => state?.user?.user)

  return (
    <div className='sidebarcon'>
      <div className="sidebar">
        <Link to={'/profile'} className={`${user?.isSub && "prouser"} route ${pathname === "/profile" && "activeroute"} `}>
          {user?.profilePic || user?.profilePic === 'undefined' ?
            <Image src={user?.profilePic} alt={''} cs="usericon" />
            // <img src={user?.profilePic} alt={user?.username} className="usericon" />
            :
            <CgProfile size={25} className={`routeicon  ${pathname === "/profile" && "activerouteicon"}`} />
          }
          <span className='routename' >Profile</span>
        </Link>
        <Link to={'/search'} className={`route ${pathname === "/search" && "activeroute"}`}>
          <LuSearch size={25} className={`routeicon  ${pathname === "/search" && "activerouteicon"}`} />
          <span className='routename' >Search</span>
        </Link>
        <Link to={'/'} className={`route ${pathname === "/" && "activeroute"}`}>
          <GoHomeFill size={25} className={`routeicon  ${pathname === "/" && "activerouteicon"}`} />
          <span className='routename' >Home</span>
        </Link>
        <Link to={'/category'} className={`route ${pathname === "/category" && "activeroute"}`}>
          <BsFillGrid1X2Fill size={20} className={`routeicon  ${pathname === "/category" && "activerouteicon"}`} />
          <span className='routename' >Category</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar