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
      <div className="relative top-10 lg:top-20 py-10">
        <h1 className="border-2 py-0.5 md:py-1 bg-gray-200 text-center text-2xl font-bold font-semibold mx-6 md:mt-5 lg:mt-10 lg:mx-44">
          Gallery
        </h1>
        <div className="mt-2">
          <GalleryComponent galleryImages={galleryImages} />
        </div>
        {/* <DztImageGalleryComponent images={data } imageBackgroundColor={"white"} className="bg-white"/> */}
      </div>
    </>
  );
};

export default GalleryPage;
