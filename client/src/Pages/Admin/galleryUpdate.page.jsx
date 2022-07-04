import React from "react";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import UpdateGallery from "../../components/AdminComponents/galleryFeatures/updateGallery";

const GalleryUpdate = (props) => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 flex flex-col gap-5">
          <AdminNavBar />
          <div className="mx-10">
            {props.urltype === "id" && <UpdateGallery />}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryUpdate;
