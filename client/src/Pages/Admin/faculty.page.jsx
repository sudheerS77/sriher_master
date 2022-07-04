import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import Card from "../../components/AdminComponents/card";
import FacultyTable from "../../components/AdminComponents/FacultyFeatures/facultyTable";
import AddFaculty from "../../components/AdminComponents/FacultyFeatures/addFaculty";
import UpdateFaculty from "../../components/AdminComponents/FacultyFeatures/updateFaculty";

//Redux actions
import { getFaculty } from "../../Redux/Reducer/Faculty/faculty.action";

const FacultyPage = (props) => {
  const [facultyData, setFacultyData] = useState([]);
  const cardData = [
    {
      name: "FACULTY",
      count: facultyData?.length,
      link: "View all faculty",
      linkUrl: "/admin/faculty",
      icon: <FaUserTie />,
    },
  ];
  const reduxState = useSelector((globalStore) => globalStore.faculty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaculty());
  }, []);

  useEffect(() => {
    reduxState?.faculty && setFacultyData(reduxState?.faculty.data);
  }, [reduxState?.faculty]);

  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 flex flex-col gap-5">
          <AdminNavBar />
          <div className="flex flex-col gap-10 mt-5">
            <div className="flex flex-row items-end justify-between mx-10">
              <div className="flex flex-row items-start">
                {cardData.map((data) => (
                  <Card {...data} />
                ))}
              </div>
              <Link
                to="/admin/addfaculty"
                className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                // onClick={openModal}
              >
                Add Faculty <IoMdAdd />
              </Link>
            </div>
            <div className="mx-10">
              {props.urltype === "faculty" && <FacultyTable />}
              {props.urltype === "addfaculty" && <AddFaculty />}
              {props.urltype === "id" && <UpdateFaculty />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyPage;
