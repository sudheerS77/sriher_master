import React from 'react'


//Components
import SideBar from '../../../components/AdminComponents/siderbar'
import AdminNavBar from '../../../components/AdminComponents/adminNavBar';
import UpdateFeedbackFaculty from '../../../components/AdminComponents/Feedback/updateFeedbackFaculty';
import DognutChart from '../../../components/AdminComponents/Feedback/dognutChart';


const FFUpdate = (props) => {
  return (
    <>
      <div className="flex flex-row w-full">
            <div className="w-1/5">
              <SideBar />
            </div>
            <div className="w-full flex flex-col gap-5">
              <AdminNavBar />
              <div className="mx-10">                                  
                  { props.urltype === "id" && <UpdateFeedbackFaculty /> }      
                  { props.urltype === "faculty-feedback" && <DognutChart /> }                                                  
              </div>
            </div>
        </div>
    </>
  )
}

export default FFUpdate;