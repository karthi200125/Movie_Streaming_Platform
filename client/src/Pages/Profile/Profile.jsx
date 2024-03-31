import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import Image from "../../Components/Image/Image";
import Model from "../../Components/Model/Model";
import Slider from '../../Components/Slider/Slider';
import Toast from "../../Components/Toast/Toast";
import { login, logout } from "../../Redux/AuthSlice";
import AxiosRequest from "../../Utils/Axiosrequest";
import useGetMovies from "../../Utils/GetAllMovies";
import { useUpload } from '../../Utils/UplaodFile';
import './Profile.scss';
import DocTitle from "../../Components/Title";
import ProgressBar from "@ramonak/react-progress-bar";

const Profile = () => {
    const user = useSelector((state) => state?.user?.user);
    const dispatch = useDispatch();
    const [EditOpen, setEditOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [file, setFile] = useState();
    const [inputs, setInputs] = useState({
        username: user?.username || '',
        email: user?.email || "",
        profilePic: user?.profilePic || "",
        phone: "",
    });

    const { per, UploadFile, donwlaodUrl } = useUpload({ file });
    useEffect(() => {
        if (file) UploadFile();
    }, [file, UploadFile]);

    const handleEditOpen = () => {
        setEditOpen(true);
    };

    const handleChnage = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleUpdate = async () => {
        try {
            setisLoading(true);
            const token = localStorage.getItem('access_token')
            AxiosRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await AxiosRequest.put(`/auth/userupdate/${user?._id}`, { ...inputs, profilePic: donwlaodUrl });
            toast(<Toast onErr={false} tmsg={"User has been updated"} />);
            dispatch(login(res.data));
        } catch (error) {
            toast(<Toast onErr={true} tmsg={error?.response?.data?.message} />);
            console.log(error);
        } finally {
            setisLoading(false);
        }
    };

    const EditBodey = (
        <div className="editcon">
            <DocTitle title={`Edit profile | ${user?.username}`} />
            <h1>Edit Profile</h1>
            <div className="edit">
                <div className="leftedit">
                    <Image src={user?.profilePic} alt={user?.username} cs="editprofileimg" />
                    <input type="file" name="" id="profileimg" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="profileimg" className="chnageimage glass">
                        Change Image
                    </label>
                    {per && <ProgressBar completed={per} />}
                </div>
                <div className="rightedit">
                    <label htmlFor="" className="editlabel"> Change User Name</label>
                    <input type="text" name="username" value={inputs?.username} id="" className="regloginput" placeholder="Change your name" onChange={handleChnage} />
                    <label htmlFor="" className="editlabel">Change Email</label>
                    <input type="email" name="email" id="" value={inputs?.email} className="regloginput" placeholder="Change your email" onChange={handleChnage} />
                    <Button isloading={isLoading} onClick={handleUpdate} bg w={'100%'}>{isLoading ? "Please wait..." : "Update"}</Button>
                </div>
            </div>
        </div>
    );

    const handleLogout = () => {
        setEditOpen(false)
        toast(<Toast onErr={false} tmsg={"Logout successful"} />);
        dispatch(logout());
    };

    const { moviesData, isLoading: dataLoading } = useGetMovies();

    const userWatchedIds = user?.watchedMovies || [];
    const watchedMoviesData = userWatchedIds
        .map(id => moviesData.find(movie => String(movie._id) === id))
        .filter(Boolean)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            <DocTitle title={`Profile - ${user ? user?.username : "LogIn"}`} />
            {user ?
                <div className='profilecon'>
                    <Model onOpen={EditOpen} onClose={() => setEditOpen(false)} bodycontent={EditBodey} />
                    {user &&
                        <div className="protop">
                            <Button bg={user?.isSub ? "" : "linear-gradient(to right, #f3e96f, #947303, #ceb349)"}>{user?.isSub ? "Cancel Subscription" : "Upgrade Subscription"}</Button>
                        </div>
                    }
                    <div className="proinfo">
                        <div className="pileft">
                            <Image src={user?.profilePic} alt={user?.username} cs='profileimg' w={'100px'} h={'100px'} br={'50%'} />
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
                    {user?.watchedMovies?.length > 0 &&
                        <Slider sTitle="Watch History" otherMovies={watchedMoviesData} isloading={dataLoading} />
                    }
                    <Footer />
                </div>
                :
                <div className="profilelgout">
                    <div className="plcon">
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png" alt="" />
                        <h1>Login to Watch All movies</h1>
                        <p>Start watching from where you left, and more.</p>
                        <Button bg pad={'20px 80px'}>Login</Button>
                    </div>
                </div>
            }
        </>
    );
};

export default Profile;
