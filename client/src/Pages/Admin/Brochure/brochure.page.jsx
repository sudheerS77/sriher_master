import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

//Components
import SideBar from '../../../components/AdminComponents/siderbar'
import AdminNavBar from '../../../components/AdminComponents/adminNavBar';
import Card from '../../../components/AdminComponents/card';
import BrochureTable from '../../../components/AdminComponents/brochureFeatures/brochureTable';
import AddBrochure from '../../../components/AdminComponents/brochureFeatures/addBrochure';

//Redux actions
import { getBrochure } from '../../../Redux/Reducer/Brochure/brochure.action';

const BrochurePage = (props) => {
  const [brochureData, setBrochureData] = useState([]);
  const cardData = [
    {
      name: "Brochure",
      count: brochureData?.length,
      icon: <FaUserFriends />,
    }
  ]

  const reduxState = useSelector((globalStore) => globalStore.brochure);
  useEffect(() => {
    reduxState?.brochure && setBrochureData(reduxState.brochure?.data);
  }, [reduxState]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrochure());
  }, []);
  
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
                  <Link to="/admin/addbrochure"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1 shadow-xl"
                    // onClick={openModal}
                    >
                    Add Brochure<IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10 shadow-xl'>
                  { props.urltype === "brochure" && <BrochureTable /> }
                  { props.urltype === "addbrochure" && <AddBrochure /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default BrochurePage;