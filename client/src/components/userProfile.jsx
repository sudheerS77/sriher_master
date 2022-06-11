import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { ImSortNumbericDesc } from "react-icons/im";
import { GiMatterStates } from "react-icons/gi";

const UserProfile = () => {
    const [user, setUser] = useState([]);
    const reduxState = useSelector((globalStore) => globalStore.user.user);

    useEffect(() => {
    reduxState?.user && setUser(reduxState?.user);
    }, [reduxState]);

  return (
    <>
        <div class="md:max-w-4xl flex items-center h-auto lg:h-screen flex-wrap lg:my-0 mx-6 border border-gray-100">    
                <div id="profile" className="w-full lg:h-full lg:w-4/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0">
                    <div class="p-4 md:p-12 text-center w-full lg:text-left">                      
                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{user?.fullName}</h1>
                        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <div class="pt-4 px-10 text-base w-auto font-bold flex items-center justify-center lg:justify-start">
                            <span className="h-4 fill-current text-green-700 pr-2">
                                <MdEmail />
                            </span>
                            <p className=''>{user?.email}</p>
                        </div>
                        <div class="pt-3 text-sm font-semibold flex flex-row items-center justify-center lg:justify-start">
                            <span className="h-4 fill-current text-green-700 pr-2">
                                <FaUniversity />
                            </span>
                            <p>{user?.institution}</p>
                        </div>
                        <p class="pt-3 text-sm font-semibold flex items-center justify-center lg:justify-start">
                            <span className="h-4 fill-current text-green-700 pr-2">
                                <FaPhoneAlt />
                            </span>
                            +91 {user?.phoneNumber}
                        </p>
                        <p class="pt-3 text-sm font-semibold flex items-center justify-center lg:justify-start">
                            <span className="h-4 fill-current text-green-700 pr-2">
                                <ImSortNumbericDesc />
                            </span>
                            {user?.stateDentalCode}
                        </p>
                        <p class="pt-3 text-sm font-semibold flex items-center justify-center lg:justify-start">
                            <span className="h-4 fill-current text-green-700 pr-2">
                                <GiMatterStates />
                            </span>
                            {user?.state}
                        </p>
                        <div class="pt-12">
                            <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                <Link to="/update-profile">update Profile</Link>
                            </button> 
                        </div>                                                
                    </div>
                </div>	
            </div>
    </>
  )
}

export default UserProfile;