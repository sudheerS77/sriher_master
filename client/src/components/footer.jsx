import React from 'react';
import { Link } from 'react-router-dom';
import {IoLogoGooglePlaystore} from "react-icons/io5"

import playStore from "./assets/google-play-badge.png";
import appStore from "./assets/app-store-badge.png";

const Footer = () => {
  return (
    <>
        <div style={{backgroundColor: "rgb(1, 13, 46)",}} className="bg-cyan-700 w-full flex flex-col-reverse md:flex-row items-start md:px-4 py-10">
            <div className="flex items-center justify-center md:w-1/2 md:pt-10">
              <div className="flex flex-col items-start gap-3 text-gray-50 px-10 md:px-0">
                <h4 className="text-lg texgt-gray-800 font-normal">Contact us</h4>
                <h5 className="text-md texgt-gray-300 font-light">No1,Sriramachandra nagar,porur</h5>
                <h5 className="text-md texgt-gray-300 font-light">044 4592 8500</h5>
                <h5 className="text-md texgt-gray-300 font-light">oralpathology@sriramachandra.edu.in</h5>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center gap-10 mx-10">            
              <a href="https://play.google.com/store/apps/details?id=com.sriher.oralpathology" target={"_blank"}>
                <img src={playStore} alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sriher.oralpathology" target={"_blank"}>
                <img src={appStore} alt="" />
              </a>
            </div>
        </div>
    </>
  )
}

export default Footer