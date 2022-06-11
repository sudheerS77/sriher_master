import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Redux action
import { signOut } from "../../Redux/Reducer/Auth/auth.action";

const AdminNavBar = () => {
  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOut());
  return (
    <>
        <div className="w-full h-14 flex flex-row justify-between items-center w-full border-b-2 border-grey-900 text-center">
          <div></div>
          <div className="flex items-center justify-center gap-4">
            {/* <RiSettings5Fill className="w-6 h-6 text-gray-800"/> */}
            {/* <div className="w-8 h-8 border p-1 rounded-full mx-10">
              <FaUser className="w-full h-full"/>
            </div> */}
          <div className="flex items-center justify-start gap-4 text-xl py-3.5 w-full border-b border-gray-300 text-red-600 hover:bg-red-900 hover:text-gray-50 bg-red-50">
            <Link to="/admin/">
              <button 
                className="font-semibold  flex items-center justify-start gap-4 w-full px-4"
                onClick={signOutHandler}
              >
                <HiLogout className="w-7 h-7"/>
                Signout
              </button>
            </Link>
          </div>
          </div>
        </div>
    </>
  )
};

export default AdminNavBar;