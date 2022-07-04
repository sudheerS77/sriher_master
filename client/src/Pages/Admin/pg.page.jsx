import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import Card from "../../components/AdminComponents/card";
import PGTable from "../../components/AdminComponents/PgFeatures/pgTable";
import AddPG from "../../components/AdminComponents/PgFeatures/addPg";

//Redux action
import { getPg } from "../../Redux/Reducer/Pg/pg.action";
import UpdatePg from "../../components/AdminComponents/PgFeatures/updatePg";

const PGPage = (props) => {
  const [pgData, setPgData] = useState([]);
  const cardData = [
    {
      name: "STUDENTS",
      count: pgData?.length,
      link: "see all Students",
      linkUrl: "/admin/pg",
      icon: <FaUserFriends />,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPg());
  }, []);

  const reduxState = useSelector((globalStore) => globalStore.pg);

  useEffect(() => {
    reduxState?.PG && setPgData(reduxState?.PG.pg);
  }, [reduxState?.PG]);

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
                to="/admin/addpg"
                className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                // onClick={openModal}
              >
                Add PG <IoMdAdd />
              </Link>
            </div>
            <div className="mx-10">
              {props.urltype === "pg" && <PGTable />}
              {props.urltype === "addpg" && <AddPG />}
              {props.urltype === "id" && <UpdatePg />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PGPage;
