import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import Card from "../../components/AdminComponents/card";
import AchievementTable from "../../components/AdminComponents/AchievementsFeatures/achievementTable";
import AddAchievement from "../../components/AdminComponents/AchievementsFeatures/addAchievement";

//Redux actions
import { getAchievement } from "../../Redux/Reducer/Achivements/achievements.action";

const AchievementsPage = (props) => {
  const [achievements, setAchievements] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalStore) => globalStore.achievement);

  useEffect(() => {
    reduxState?.achievements &&
      setAchievements(reduxState.achievements.achievememts);
  }, [reduxState]);

  useEffect(() => {
    dispatch(getAchievement());
  }, []);

  const cardData = [
    {
      name: "ACHIEVEMENTS",
      count: achievements?.length,
      link: "View all achievements",
      linkUrl: "/admin/achievements",
      icon: <FaUserTie />,
    },
  ];

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
                to="/admin/addachievement"
                className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
              >
                Add Achievement <IoMdAdd />
              </Link>
            </div>
            <div className="mx-10">
              {props.urltype === "achievements" && <AchievementTable />}
              {props.urltype === "addachievement" && <AddAchievement />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsPage;
