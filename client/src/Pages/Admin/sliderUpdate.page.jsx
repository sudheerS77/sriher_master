import React from "react";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import UpdateSliderImage from "../../components/AdminComponents/slider/updateSlider";

const SliderUpdate = (props) => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-full flex flex-col gap-5">
          <AdminNavBar />
          <div className="mx-10">
            {props.urltype === "id" && <UpdateSliderImage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderUpdate;
