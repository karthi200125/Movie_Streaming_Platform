import axios from "axios";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Components/Button/Button';
import Carousel from '../../Components/Carousel/Carousel';
import Footer from '../../Components/Footer/Footer';
import Image from "../../Components/Image/Image";
import Model from "../../Components/Model/Model";
import { MoviesData } from "../../MoviesData";
import { login, logout } from "../../Redux/AuthSlice";
import './Profile.scss';
import { toast } from "sonner";
import Toast from "../../Components/Toast/Toast";

const Profile = () => {

    const user = useSelector((state) => state?.user?.user)
    const dispatch = useDispatch()
    const [EditOpen, setEditOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [inputs, setInputs] = useState({
        username: user?.username || '',
        email: user?.email || "",
        phone: ""
    });

    const handleEditOpen = () => {
        setEditOpen(true);
    };

    const handleChnage = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpdate = async () => {
        try {
            setisLoading(true)
            const res = await axios.put(`http://localhost:8800/api/auth/userupdate/${user?._id}`, { inputs })
            console.log(res)
            toast(<Toast onErr={false} tmsg={"user Has Been updated"} />)
            dispatch(login(res.data))
        } catch (error) {
            toast(<Toast onErr={true} tmsg={error?.response?.data?.message} />)
            console.log(error)
        } finally {
            setisLoading(false)
        }
    }


    const EditBodey = (
        <div className="editcon">
            <h1 >Edit Profile</h1>
            <div className="edit">
                <div className="leftedit">
                    <Image src={user?.profilePic} alt="" className="editprofileimg" w={'100px'} h={'100px'} br={'50%'} />
                    <input type="file" name="" id="profileimg" style={{ display: "none" }} />
                    <label htmlFor="profileimg" className="chnageimage glass">
                        Chnage Image
                    </label>
                </div>
                <div className="rightedit">
                    <label htmlFor="" className="editlabel"> Chnage User Name</label>
                    <input type="text" name="username" value={inputs?.username} id="" className="regloginput" placeholder="chnage your name" onChange={handleChnage} />
                    <label htmlFor="" className="editlabel">Chnage Email</label>
                    <input type="email" name="email" id="" value={inputs?.email} className="regloginput" placeholder="chnage your name" onChange={handleChnage} />
                    <label htmlFor="" className="editlabel">Chnage Phone</label>
                    <input type="number" name="phone" id="" value={''} className="regloginput" placeholder="chnage your name" onChange={handleChnage} />
                    <Button isloading={isLoading} onClick={handleUpdate} bg w={'100%'}>{isLoading ? "Please wait..." : "Update"}</Button>
                </div>
            </div>
        </div>
    )

    const handleLogout = () => {
        toast(<Toast onErr={false} tmsg={"logout successfully"} />)
        dispatch(logout())
    }

    const userWatchedIds = user?.watchedMovies;
    const watchedMoviesData = MoviesData.filter(movie => userWatchedIds?.includes(movie.id));

    return (
        <>
            {user ?
                <div className='profilecon'>
                    <Model onOpen={EditOpen} onClose={() => setEditOpen(false)} bodycontent={EditBodey} />
                    {user &&
                        <div className="protop">
                            <Button bg="linear-gradient(to right, #f3e96f, #947303, #ceb349)">{user?.isSub ? "Cancel Subscription" : "Upgrade Subscription"}</Button>
                        </div>
                    }
                    <div className="proinfo">
                        <div className="pileft">
                            <Image src={user?.profilePic} alt={user?.username} className='profileimg' w={'100px'} h={'100px'} br={'50%'} />
                            <div className="profileinfo">
                                <h1>{user?.username}</h1>
                                <p>7904653176</p>
                            </div>
                        </div>
                        <div className="piright" onClick={handleEditOpen}>
                            <div className="ed">
                                <FiEdit2 size={20} />
                                <span>Edit</span>
                            </div>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>

                    </div>
                    <Carousel CatTitle="Watch History" promovies={watchedMoviesData} />
                    <Footer />
                </div>
                :
                <div className="profilelgout">
                    <div className="plcon">
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png" alt="" />
                        <h1>Login to Watch All movies</h1>
                        <p>start wathcing from where you left , more</p>
                        <Button bg pad={'20px 80px'}>Login</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile