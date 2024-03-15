import ar from './Assets/TitleImages/ar.png'
import ava from './Assets/TitleImages/ava.png'
import bahu from './Assets/TitleImages/bahu.png'
import gf from './Assets/TitleImages/gf.png'
import hi from './Assets/TitleImages/hi.png'
import infinitywar from './Assets/TitleImages/infinitywar.png'
import kaithi from './Assets/TitleImages/kaithi.png'
import leo from './Assets/TitleImages/leo.png'
import maveeran from './Assets/TitleImages/maveeran.png'
import pushpa from './Assets/TitleImages/pushpa.png'
import sr from './Assets/TitleImages/sr.png'
import vikram from './Assets/TitleImages/vikram.png'
import { GetMovie } from './GetMovie'

export const MoviesData = [
    // english
    { id: 1, title: "avatar", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710491807/IMAX_4K_Teaser_Avatar_2__The_Way_of_Water_Dolby_5.1_1080P_HD_ryoofw.mp4", titleImg: ava, isFree: false },
    { id: 2, title: "Avengers: Infinity War", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493242/Thor_Arrives_In_Wakanda_Scene_-_Avengers_Infinity_War_2018_Movie_CLIP_4K_ULTRA_HD_1080P_HD_ikvl9o.mp4", titleImg: infinitywar, isFree: true },
    { id: 3, title: "The Shawshank Redemption", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493803/4k_The_Shawshank_Redemption_Edit___simpsonwave_1995_1080P_60FPS_vfz73a.mp4", titleImg: sr, isFree: false },
    { id: 4, title: "The Godfather", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493832/The_Beauty_Of_The_Godfather_trilogy_1080P_HD_ulukp3.mp4", titleImg: gf, isFree: true },
    // tamil
    { id: 5, title: "Vikram tamil", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493818/Once_Upon_A_Time_Video___VIKRAM___Kamal_Haasan___Anirudh_Ravichander___Lokesh_Kanagaraj_1080P_HD_cadpjj.mp4", titleImg: vikram, isFree: false },
    { id: 6, title: "Kaithi tamil", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493836/%E0%AE%87%E0%AE%A8%E0%AF%8D%E0%AE%A4_scene_%E0%AE%B5%E0%AF%86%E0%AE%B1%E0%AE%BF%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%A9%E0%AE%AE%E0%AF%8D.._--__Kaithi__DisneyplusHotstar_1080P_HD_z531nz.mp4", titleImg: kaithi, isFree: true },
    { id: 7, title: "Maaveeran", movieUrl: "", MoviePreview: "", titleImg: maveeran, isFree: false },
    { id: 8, title: "Leo tamil", movieUrl: "", MoviePreview: "", titleImg: leo, isFree: true },
    // telugu
    { id: 9, title: "Hi Nana", movieUrl: "", MoviePreview: "", titleImg: hi, isFree: false },
    { id: 10, title: "bahubali", movieUrl: "", MoviePreview: "", titleImg: bahu, isFree: true },
    { id: 11, title: "Arjun reddy", movieUrl: "", MoviePreview: "", titleImg: ar, isFree: false },
    { id: 12, title: "pushpa", movieUrl: "", MoviePreview: "", titleImg: pushpa, isFree: true },
    // hindi
    { id: 13, title: "Jawan", movieUrl: "", MoviePreview: "", titleImg: "", isFree: false },
    { id: 14, title: "Animal", movieUrl: "", MoviePreview: "", titleImg: "", isFree: true },
    { id: 15, title: "Dunki", movieUrl: "", MoviePreview: "", titleImg: "", isFree: false },
    { id: 16, title: "Dangal", movieUrl: "", MoviePreview: "", titleImg: "", isFree: true },
]
