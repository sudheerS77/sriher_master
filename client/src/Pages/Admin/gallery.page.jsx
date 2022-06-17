import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import Card from "../../components/AdminComponents/card";
import GalleryTable from "../../components/AdminComponents/galleryFeatures/galleryTable";
import AddImage from "../../components/AdminComponents/galleryFeatures/addImage";

//Redux actions
import { getPhotos } from "../../Redux/Reducer/Gallery/gallery.action";
import UpdateGallery from "../../components/AdminComponents/galleryFeatures/updateGallery";

const GalleryAPage = (props) => {
  const [galleryImages, setGalleryImages] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  const reduxState = useSelector((globalStore) => globalStore.gallery);

  useEffect(() => {
    reduxState?.photos && setGalleryImages(reduxState.photos.photos);
  }, [reduxState.photos]);

  const cardData = [
    {
      name: "Gallery",
      count: galleryImages?.length,
      link: "View all projects",
      linkUrl: "/admin/projects",
      icon: <FaUserTie />,
    },
  ];

  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-full flex flex-col gap-5">
          <AdminNavBar />
          <div className="flex flex-col gap-10 mt-5">
            <div className="flex flex-row items-end justify-between mx-10">
              <div className="flex flex-row items-start">
                {cardData.map((data) => (
                  <Card {...data} />
                ))}
              </div>
              <Link
                to="/admin/addimage"
                className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                // onClick={openModal}
              >
                Add Image <IoMdAdd />
              </Link>
            </div>
            <div className="mx-10">
              {props.urltype === "gallery" && <GalleryTable />}
              {props.urltype === "addimage" && <AddImage />}
              {props.urltype === "id" && <UpdateGallery />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryAPage;
