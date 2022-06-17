import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { ImSortNumbericDesc } from "react-icons/im";
import { GiMatterStates } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../key";

const UserProfile = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  const reduxState = useSelector((globalStore) => globalStore.user.user);
  const [changePass, setChangePass] = useState(false);

  useEffect(() => {
    reduxState?.user && setUser(reduxState?.user);
  }, [reduxState]);
  console.log(user);

  const [cred, setCred] = useState({
    password: "",
    cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    show: false,
    hide: true,
    message: "SUCCESS",
  });
  const closeError = () => {
    setErrorMsg({
      show: false,
      hide: true,
      message: "",
    });
  };
  const validateAndChange = () => {
    var err = 0;
    if (cred.password === " ") {
      err = 1;
      setErrorMsg({ show: true, hide: false, message: "Enter Your Password" });
    }
    if (cred.cpassword === " ") {
      err = 1;
      setErrorMsg({
        show: true,
        hide: false,
        message: "Confirm Your Password",
      });
    }
    console.log(cred);
    if (!(cred.password === cred.cpassword)) {
      err = 1;
      setErrorMsg({
        show: true,
        hide: false,
        message: "Password did not match",
      });
    }

    if (err === 0) {
      const userData = {
        _id: user._id,
        password: cred.password,
      };
      console.log(userData);
      axios
        .post(`${API_URL}/auth/change-password`, userData)
        .then((response) => {
          alert(response.data.message);
          navigate("/");
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <>
      <div class="md:max-w-4xl flex items-center h-auto lg:h-auto flex-wrap lg:my-0 mx-6 border border-gray-100">
        <div
          id="profile"
          className="w-full lg:h-full lg:w-4/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0"
        >
          {errorMsg?.show && (
            <div className="flex w-full items-center justify-between bg-red-500 p-2 text-white font-light">
              {errorMsg.message}
              <button onClick={closeError}>
                <AiOutlineClose className="w-6 h-6" />
              </button>
            </div>
          )}
          {!changePass ? (
            <div class="p-4 md:p-12 text-center w-full lg:text-left">
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">{user?.fullName}</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <div class="pt-4 px-10 text-base w-auto font-bold flex items-center justify-center lg:justify-start">
                <span className="h-4 fill-current text-green-700 pr-2">
                  <MdEmail />
                </span>
                <p className="">{user?.email}</p>
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
              <div class="pt-12 flex items-center justify-center gap-6">
                <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  <Link to="/update-profile">update Profile</Link>
                </button>
                <button
                  class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    setChangePass(true);
                  }}
                >
                  Change Password
                </button>
              </div>
            </div>
          ) : (
            <div class="p-4 md:p-12 text-center w-full lg:text-left">
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">{user?.fullName}</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25 mb-10"></div>
              <div className="flex flex-col items-center gap-6">
                <input
                  type="password"
                  placeholder="enter your new password"
                  onChange={(e) =>
                    setCred((prev) => ({ ...prev, password: e.target.value }))
                  }
                  // setCred({ password: e.value })}
                  className="px-4 py-2 border-2 border-gray-400 rounded-xl"
                />
                <input
                  type="password"
                  placeholder="confirm your new password"
                  onChange={(e) =>
                    setCred((prev) => ({ ...prev, cpassword: e.target.value }))
                  }
                  className="px-4 py-2 border-2 border-gray-400 rounded-xl"
                />
              </div>
              <div class="pt-12 flex items-center justify-center gap-6">
                <button
                  class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  onClick={validateAndChange}
                >
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
