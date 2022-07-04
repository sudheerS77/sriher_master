import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

//Components
import SideBar from "../../components/AdminComponents/siderbar";
import AdminNavBar from "../../components/AdminComponents/adminNavBar";
import Card from "../../components/AdminComponents/card";
import AddEvent from "../../components/AdminComponents/EventFeatures/addEvent";

//Redux actions
import { getEvents } from "../../Redux/Reducer/Events/event.action";
import EventTable from "../../components/AdminComponents/EventFeatures/eventTable";

const EventsPage = (props) => {
  const [eventData, setEventsData] = useState([]);
  const cardData = [
    {
      name: "EVENTS",
      count: eventData?.length,
      link: "see all Events",
      linkUrl: "/admin/events",
      icon: <FaUserFriends />,
    },
  ];

  const reduxState = useSelector((globalStore) => globalStore.event);

  useEffect(() => {
    reduxState?.events && setEventsData(reduxState.events?.events);
  }, [reduxState?.events]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

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
                to="/admin/addevent"
                className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1 shadow-xl"
                // onClick={openModal}
              >
                Add Event
                <IoMdAdd />
              </Link>
            </div>
            <div className="mx-10 shadow-xl">
              {props.urltype === "events" && <EventTable />}
              {props.urltype === "addevent" && <AddEvent />}
              {/* { props.urltype === "id" && <UpdateEvent /> } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
