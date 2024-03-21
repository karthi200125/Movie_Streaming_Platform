import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Button from '../../Components/Button/Button';
import { useUpload } from '../../Utils/UplaodFile';
import './DashBoard.scss';
import Image from '../../Components/Image/Image';
import { IoMdCloudUpload } from "react-icons/io";
import ProgressBar from '@ramonak/react-progress-bar';
import { toast } from 'sonner';
import Toast from '../../Components/Toast/Toast';
import AxiosRequest from '../../Utils/Axiosrequest';

const Dashboard = () => {
    const [titleimg, settitleimg] = useState();
    const [thumpimg, setthumpimg] = useState();
    const [preview, setpreview] = useState();
    const [movievideo, setmovievideo] = useState();
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [titleImageUrl, setTitleImageUrl] = useState("");
    const [moviePreviewUrl, setMoviePreviewUrl] = useState("");
    const [movieUrl, setMovieUrl] = useState("");
    const [isLoading, setisLoading] = useState(false);

    // Title image
    const { progress: titleimageProgress, uploadFile: LtitleimageUploadFile, downloadUrl: titleImageDownloadUrl } = useUpload({ file: titleimg });
    useEffect(() => {
        if (titleimg) LtitleimageUploadFile();
    }, [titleimg, LtitleimageUploadFile]);
    useEffect(() => {
        if (titleImageDownloadUrl) setTitleImageUrl(titleImageDownloadUrl);
    }, [titleImageDownloadUrl]);

    // Thumbnail image
    const { progress: thumbnailProgress, uploadFile: thumbnailUploadFile, downloadUrl: thumbnailDownloadUrl } = useUpload({ file: thumpimg });
    useEffect(() => {
        if (thumpimg) thumbnailUploadFile();
    }, [thumpimg, thumbnailUploadFile]);
    useEffect(() => {
        if (thumbnailDownloadUrl) setThumbnailUrl(thumbnailDownloadUrl);
    }, [thumbnailDownloadUrl]);

    // Movie Preview Video
    const { progress: moviePreviewProgress, uploadFile: moviePreviewUploadFile, downloadUrl: moviePreviewDownloadUrl } = useUpload({ file: preview });
    useEffect(() => {
        if (preview) moviePreviewUploadFile();
    }, [preview, moviePreviewUploadFile]);
    useEffect(() => {
        if (moviePreviewDownloadUrl) setMoviePreviewUrl(moviePreviewDownloadUrl);
    }, [moviePreviewDownloadUrl]);

    // Movie Video upload
    const { progress: movieProgress, uploadFile: movieUploadFile, downloadUrl: movieDownloadUrl } = useUpload({ file: movievideo });
    useEffect(() => {
        if (movievideo) movieUploadFile();
    }, [movievideo, movieUploadFile]);
    useEffect(() => {
        if (movieDownloadUrl) setMovieUrl(movieDownloadUrl);
    }, [movieDownloadUrl]);

    const [inputs, setInputs] = useState({
        movieTitle: '',
        isFree: false,
        thumpnailImg: thumbnailDownloadUrl || "",
        TitleImg: titleImageDownloadUrl || "",
        moviePreview: moviePreviewDownloadUrl || "",
        movieVideo: movieDownloadUrl || ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!movieTitle) return toast(<Toast onErr={true} tmsg={"Movie Titlte Required"} />);
        if (!titleImageDownloadUrl) return toast(<Toast onErr={true} tmsg={"Movie Titlte Image Required"} />);
        if (!thumbnailDownloadUrl) return toast(<Toast onErr={true} tmsg={"Movie Thumpnail Image Required"} />);
        if (!movieDownloadUrl) return toast(<Toast onErr={true} tmsg={"Movie Video is Required"} />);
        if (!moviePreviewDownloadUrl) return toast(<Toast onErr={true} tmsg={"Movie Preview Video is Required"} />);
        try {
            setisLoading(true)
            await AxiosRequest.post(`/movie/createmovie`, { movieTitle: inputs?.movieTitle, TitleImg: titleImageDownloadUrl, isFree: Boolean(inputs?.isFree), thumpnailImg: thumbnailDownloadUrl, movieVideo: movieDownloadUrl, moviePreview: moviePreviewDownloadUrl });
            toast(<Toast onErr={false} tmsg={"Movie has been Created"} />);
        } catch (error) {
            toast(<Toast onErr={true} tmsg={error?.response?.data?.message} />);
            console.log(error);
        } finally {
            setisLoading(false)
        }
    };

    return (
        <div className='dashboard-container'>
            <div className="submitmovie">
                <Button bg onClick={handleSubmit} isloading={isLoading}>Upload Movie</Button>
            </div>
            <div className="section-one">
                <div className="left-panel">
                    <div className="title-input">
                        <label htmlFor="movieTitle">Movie Title</label>
                        <input type="text" name='movieTitle' id="movieTitle" placeholder='Movie Title' value={inputs.movieTitle} required onChange={handleChange} />
                    </div>
                    <div className="free-or-premium">
                        <label htmlFor="movieType">Movie Free Or Premium</label>
                        <select name='isFree' id="movieType" onChange={handleChange} value={inputs.isFree}>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="section-title">
                        <h2>Title Image</h2>
                        <label htmlFor="titleImage"><IoMdCloudUpload className='uploadicon' /> Upload Title Image </label>
                    </div>
                    {titleimageProgress && <ProgressBar completed={titleimageProgress} />}
                    <div className="dashimgcon">
                        <Image src={titleImageUrl} alt="upload Title Image" cs='title-image' />
                    </div>
                    <input type="file" accept="image/*" id="titleImage" className="title-image-input" onChange={(e) => settitleimg(e.target.files[0])} style={{ display: "none" }} />
                </div>
            </div>
            <div className="section-two">
                <div className="thumbnail-container">
                    <div className="section-title">
                        <h2>Thumbnail Image</h2>
                        <label htmlFor="thumbnailImage"><IoMdCloudUpload className='uploadicon' /> Upload Thumbnail Image</label>
                    </div>
                    <input type="file" accept="image/*" id='thumbnailImage' className="thumbnail-input" onChange={(e) => setthumpimg(e.target.files[0])} style={{ display: 'none' }} />
                    {thumbnailProgress && <ProgressBar completed={thumbnailProgress} />}
                    <Image src={thumbnailUrl} alt="upload Movie Thumpnail Image" cs='thumbnail-image' />
                </div>
                <div className="preview-container">
                    <div className="section-title">
                        <h2>Movie Preview Video</h2>
                        <label htmlFor="previewVideo"><IoMdCloudUpload className='uploadicon' /> Upload Video <span></span></label>
                    </div>
                    <input type="file" accept="video/*" id="previewVideo" className="preview-video-input" onChange={(e) => setpreview(e.target.files[0])} style={{ display: "none" }} />
                    {moviePreviewProgress && <ProgressBar completed={moviePreviewProgress} />}
                    <div className="preview-video">
                        <ReactPlayer width={'100%'} height={'100%'} url={moviePreviewUrl} playing={true} />
                    </div>
                </div>
            </div>
            <div className="section-three">
                <div className="three-title">
                    <h2>Movie Video</h2>
                    <label htmlFor="movieUpload"><IoMdCloudUpload className='uploadicon' /> Upload Movie</label>
                </div>
                {movieProgress && <div style={{ width: '100%' }}><ProgressBar completed={100} /></div>}
                <input type="file" accept="video/*" className="movie-upload-input" id='movieUpload' onChange={(e) => setmovievideo(e.target.files[0])} style={{ display: "none" }} />
                <div className="movie-upload">
                    <ReactPlayer width={'100%'} height={'100%'} url={movieUrl} playing={true} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
