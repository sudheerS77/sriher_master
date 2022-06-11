import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import VisitingFacultyTable from '../../components/AdminComponents/VisitingFacultyFeatures/visitingfacultyTable';
import AddVisitingFaculty from '../../components/AdminComponents/VisitingFacultyFeatures/addVisitingFaculty';
import UpdateVisitingFaculty from "../../components/AdminComponents/VisitingFacultyFeatures/updateVisitingFaculty";

//Redux actions
import { getVisitingFaculty } from "../../Redux/Reducer/VisitingFaculty/visitingFaculty.action";
import { getAllUsers } from '../../Redux/Reducer/User/user.action';
const VisitingFacultyPage = (props) => {
    const [facultyData, setFacultyData] = useState([]);  
    const cardData = [
        {
            name: "VISITING FACULTY",
            count: facultyData?.length,
            link: "Visiting Faculty",
            linkUrl: "/admin/visiting-faculty",
            icon: <FaUserTie />,
        },
      ]
    const reduxState = useSelector((globalStore) => globalStore.visitingFaculty)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getVisitingFaculty());
    }, [])
    
  useEffect(() => {
    reduxState?.faculty && setFacultyData(reduxState?.faculty.data);
  }, [reduxState?.faculty]);
  
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
                    {
                      cardData.map((data) => <Card {...data}/>)
                    }
                  </div>
                  <Link to="/admin/addvisitingfaculty"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                    // onClick={openModal}
                    >
                    Add Visiting Faculty <IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10'>
                  { props.urltype === "visitingfaculty" && <VisitingFacultyTable /> }
                  { props.urltype === "addvisitingfaculty" && <AddVisitingFaculty /> }
                  { props.urltype === "id" && <UpdateVisitingFaculty /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default VisitingFacultyPage;