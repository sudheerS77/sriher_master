import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser, FaUserTie, FaUserFriends } from "react-icons/fa";
import { MdOutlineEmojiEvents, MdFeedback, MdOutlinePayment, MdViewCarousel  } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { GiAchievement, GiBookCover } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { RiGalleryFill, RiSlideshow3Fill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";
import logo from "../assets/logo.png";


//Redux action
import { signOut } from "../../Redux/Reducer/Auth/auth.action";

const SideBar = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore) => globalStore.user.user);
    const signOutHandler = () => dispatch(signOut());
  return (
      <>
        <div className="hidden lg:block fixed w-64 h-screen border-r-2 border-gray-300">
            <div className="md:w-64 lg:w-full h-14 border border-gray-100">
                <Link to="/admin">
                    <img src={logo} alt="Logo" className="w-full h-full"/>
                </Link>
            </div>
            <hr />
            <div className="h-screen overflow-scroll">
                <ul className="text-lg font-semibold text-gray-600 flex flex-col items-start w-full pt-2">
                    <li className="pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/users" className="flex items-center justify-start gap-4 w-full">
                            <FaUser className="w-7 h-7 text-blue-900"/>
                            Users
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/events" className="flex items-center justify-start gap-4 w-full">
                            <MdOutlineEmojiEvents className="w-7 h-7 text-yellow-500"/>
                            Evenets
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/faculty" className="flex items-center justify-start gap-4 w-full">
                            <FaUserTie className="w-7 h-7 text-blue-900"/>
                            Faculty
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/visitingfaculty" className="flex items-center justify-start gap-4 w-full">
                            <ImUserTie className="w-7 h-7 text-blue-900"/>
                            Visiting Faculty
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/pg" className="flex items-center justify-start gap-4 w-full">
                            <FaUserFriends className="w-7 h-7 text-blue-900"/>
                            PG
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/brochure" className="flex items-center justify-start gap-4 w-full">
                            <GiBookCover className="w-7 h-7 text-blue-400"/>
                            Brochure
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/projects" className="flex items-center justify-start gap-4 w-full">
                            <GoProject className="w-7 h-7 text-blue-900"/>
                            Projects
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/achievements" className="flex items-center justify-start gap-4 w-full">
                            <GiAchievement className="w-7 h-7 text-blue-900"/>
                            Achievements
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/gallery" className="flex items-center justify-start gap-4 w-full">
                            <RiGalleryFill className="w-7 h-7 text-green-400"/>
                            Gallery
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/slider" className="flex items-center justify-start gap-4 w-full">
                            <MdViewCarousel className="w-7 h-7 text-cyan-800"/>
                            Carousels
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/feedback" className="flex items-center justify-start gap-4 w-full">
                            <MdFeedback className="w-7 h-7 text-yellow-400"/>
                            Feedback
                        </Link>
                    </li> 
                    <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/feedback" className="flex items-center justify-start gap-4 w-full">
                            <MdOutlinePayment className="w-7 h-7 text-green-800"/>
                            Successful Payments
                        </Link>
                    </li>                    
                    {/* <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 hover:bg-gray-100">
                        <Link to="/admin/slider" className="flex items-center justify-start gap-4 w-full">
                            <RiSettings5Fill className="w-7 h-7 text-gray-800"/>
                            Settings
                        </Link>
                    </li> */}
                    {reduxState?.user && (
                        <li className="flex items-center justify-start gap-4 pl-6 py-3.5 w-full border-b border-gray-300 text-red-600 hover:bg-red-400 hover:text-gray-50 bg-red-50">
                            <Link to="/admin/">
                                <button onClick={signOutHandler} className="font-semibold  flex items-center justify-start gap-4 w-full">
                                    <HiLogout className="w-7 h-7"/>
                                    Signout
                                </button>
                            </Link>
                        </li>
                    )}                                    
                </ul>
            </div>

        </div>
      </>

      
     
  )
}

export default SideBar