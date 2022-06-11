import React, { useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { IoMdAdd } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import AddProject from "../../components/AdminComponents/ProjectFeatures/addProject";
import ProjectTable from "../../components/AdminComponents/ProjectFeatures/projectTable";

//Redux actions
import { getProject } from '../../Redux/Reducer/Projects/project.action';
import UpdateProject from '../../components/AdminComponents/ProjectFeatures/updateProject';
import SliderTable from '../../components/AdminComponents/slider/sliderTable';
import AddSliderImage from '../../components/AdminComponents/slider/addSlider';
import UpdateSliderImage from '../../components/AdminComponents/slider/updateSlider';

const SliderPage = (props) => {
    const [sliderImages, setSliderImages] = useState([]);
        
    const reduxState = useSelector((globalStore) => globalStore.Slider);
    
    useEffect(() => {
      reduxState?.slider && setSliderImages(reduxState.slider.data);
    }, [reduxState]);
    

    const cardData = [
        {
            name: "Slider Images",
            count: sliderImages?.length,
            icon: <FaUserTie />,
        },
      ]
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
                  <Link to="/admin/addslider"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                    // onClick={openModal}
                    >
                    Add Slider image <IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10'>
                  { props.urltype === "slider" && <SliderTable />  }
                  { props.urltype === "addslider" && <AddSliderImage /> }
                  { props.urltype === "id" && <UpdateSliderImage /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SliderPage;