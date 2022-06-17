import React from "react";
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import UpdateFaculty from "../../components/AdminComponents/FacultyFeatures/updateFaculty";

const FacultyUpdate = (props) => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-full flex flex-col gap-5">
          <AdminNavBar />
          <div className="mx-10">
            {props.urltype === "id" && <UpdateFaculty />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyUpdate;
