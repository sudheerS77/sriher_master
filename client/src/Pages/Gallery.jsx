import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import NavBar from "../components/Navbar/NavBar";
import GalleryComponent from "../components/Gallery/gallery.Component";

//Redux actions
import { getPhotos } from "../Redux/Reducer/Gallery/gallery.action";

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  const reduxState = useSelector((globalStore) => globalStore.gallery);

  useEffect(() => {
    reduxState?.photos && setGalleryImages(reduxState.photos.photos);
  }, [reduxState.photos]);

  return (
    <>
      <NavBar />
      <div className="py-10">
        <div className="lg:w-full mt-14 lg:-mb-1.5"></div>
        <div className="md:mt-24">
          <GalleryComponent galleryImages={galleryImages} />
        </div>
        {/* <DztImageGalleryComponent images={data } imageBackgroundColor={"white"} className="bg-white"/> */}
      </div>
    </>
  );
};

export default GalleryPage;
