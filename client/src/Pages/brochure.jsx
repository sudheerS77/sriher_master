import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import NavBar from '../components/Navbar/NavBar'
import BrochureComponent from "../components/Brochure/brochure.Component";
import Footer from "../components/footer";

//Redux actions
import { getBrochure } from "../Redux/Reducer/Brochure/brochure.action"; 
const Brochure = () => {
  const [brochureData, setBrochureData] = useState([]);  

  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(getBrochure());
  }, [])

  const reduxState = useSelector((globalStore) => globalStore.brochure);
  useEffect(() => {
    reduxState?.brochure && setBrochureData(reduxState.brochure?.data);
  }, [reduxState]);

   

  return (
    <>
        <NavBar />
        <div className="py-10">
          <div className='lg:w-full mt-14 lg:-mb-1.5'></div> 
            <div className="md:mt-24">
              <BrochureComponent galleryImages={brochureData} /> 
            </div>
          {/* 
          <GalleryComponent name={"MICROSCOPE"} galleryImages={galleryImages} />  */}
          
            {/* <DztImageGalleryComponent images={data } imageBackgroundColor={"white"} className="bg-white"/> */}
        </div>
    </>
  )
}

export default Brochure;