import React from 'react'
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import AchievementTable from "../../components/AdminComponents/AchievementsFeatures/achievementTable";
import AddAchievement from "../../components/AdminComponents/AchievementsFeatures/addAchievement";
import UpdateAchievement from '../../components/AdminComponents/AchievementsFeatures/updateAchievement';


const AchUpdate = (props) => {
  return (
    <>
      <div className="flex flex-row w-full">
            <div className="w-1/5">
              <SideBar />
            </div>
            <div className="w-full flex flex-col gap-5">
              <AdminNavBar />
              <div className="mx-10">                                  
                  { props.urltype === "id" && <UpdateAchievement /> }                                
              </div>
            </div>
        </div>
    </>
  )
}

export default AchUpdate;