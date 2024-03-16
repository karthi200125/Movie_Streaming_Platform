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

export const MoviesData = [
    // english
    { id: 1, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710570112/6046529_jbdcxx.jpg", title: "avatar", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710491807/IMAX_4K_Teaser_Avatar_2__The_Way_of_Water_Dolby_5.1_1080P_HD_ryoofw.mp4", titleImg: ava, isFree: false },
    { id: 2, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710570673/5920_vbv6zt.jpg", title: "Avengers: Infinity War", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493242/Thor_Arrives_In_Wakanda_Scene_-_Avengers_Infinity_War_2018_Movie_CLIP_4K_ULTRA_HD_1080P_HD_ikvl9o.mp4", titleImg: infinitywar, isFree: false },
    { id: 3, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571744/1632064_ycgtoe.jpg", title: "The Shawshank Redemption", movieUrl: "https://youtu.be/XIv97tIImz8?si=pCPljTi9dCM7i-Yb", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493803/4k_The_Shawshank_Redemption_Edit___simpsonwave_1995_1080P_60FPS_vfz73a.mp4", titleImg: sr, isFree: true },
    { id: 4, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571738/8066415_epe2fc.jpg", title: "The Godfather", movieUrl: "https://youtu.be/yrwQZtfY91A?si=XX_W1NqD05JIhDu_", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493832/The_Beauty_Of_The_Godfather_trilogy_1080P_HD_ulukp3.mp4", titleImg: gf, isFree: true },
    // tamil
    { id: 5, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710572384/jpeg-optimizer_wp11049932-vikram-kamal-wallpapers_y0ujxe.jpg", title: "Vikram tamil", movieUrl: "", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493818/Once_Upon_A_Time_Video___VIKRAM___Kamal_Haasan___Anirudh_Ravichander___Lokesh_Kanagaraj_1080P_HD_cadpjj.mp4", titleImg: vikram, isFree: false },
    { id: 6, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571740/8282135_p0fcj3.jpg", title: "Kaithi tamil", movieUrl: "https://youtu.be/evkt0CDchfY?si=3fX9yN7o72nU1CEk", MoviePreview: "https://res.cloudinary.com/duextvtta/video/upload/v1710493836/%E0%AE%87%E0%AE%A8%E0%AF%8D%E0%AE%A4_scene_%E0%AE%B5%E0%AF%86%E0%AE%B1%E0%AE%BF%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%A9%E0%AE%AE%E0%AF%8D.._--__Kaithi__DisneyplusHotstar_1080P_HD_z531nz.mp4", titleImg: kaithi, isFree: true },
    { id: 7, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571742/10739613_uuegqp.jpg", title: "Maaveeran", movieUrl: "", MoviePreview: "", titleImg: maveeran, isFree: false },
    { id: 8, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571741/9372414_txzihy.jpg", title: "Leo tamil", movieUrl: "", MoviePreview: "", titleImg: leo, isFree: false },
    // telugu
    { id: 9, MovieImg: "", title: "హాయ్ నాన్న", movieUrl: "https://youtu.be/cnaaKddzBFg?si=jraIoF3jr7AB9AXd", MoviePreview: "", titleImg: hi, isFree: true },
    { id: 10, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571737/2108468_zoijdf.jpg", title: "bahubali", movieUrl: "https://youtu.be/fUvFHfGP69Y?si=roYXLzQHL9dSYfSb", MoviePreview: "", titleImg: bahu, isFree: true },
    { id: 11, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571743/1584691_1_wdga8w.jpg", title: "Arjun reddy", movieUrl: "", MoviePreview: "", titleImg: ar, isFree: false },
    { id: 12, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571737/5153379_sugnrs.jpg", title: "pushpa", movieUrl: "", MoviePreview: "", titleImg: pushpa, isFree: true },
    // hindi
    { id: 13, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571740/9335211_bztefn.jpg", title: "Jawan", movieUrl: "https://youtu.be/3poTjCvqnRg?si=bnBst6Vx3sAqO0o2", MoviePreview: "", titleImg: "", isFree: true },
    { id: 14, MovieImg: "", title: "Animal", movieUrl: "", MoviePreview: "", titleImg: "", isFree: false },
    { id: 15, MovieImg: "", title: "Dunki", movieUrl: "", MoviePreview: "", titleImg: "", isFree: false },
    { id: 16, MovieImg: "https://res.cloudinary.com/duextvtta/image/upload/v1710571737/7113864_orkqj2.jpg", title: "Dangal", movieUrl: "https://youtu.be/0dPbPAY8eiQ?si=l2ydycfEHDbP-dSG", MoviePreview: "", titleImg: "", isFree: true },
]
