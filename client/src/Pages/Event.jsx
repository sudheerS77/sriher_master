import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import NavBar from "../components/Navbar/NavBar";
import OnGoingEvents from "../components/Events/onGoingEvents";
import CompletedEvents from "../components/Events/completedEvents";

//Redux actions
import { getEvents } from "../Redux/Reducer/Events/event.action";

const Event = () => {
  const [eventData, setEventsData] = useState([]);
  const [onGoingEventsCount, setOnGoingEventsCount] = useState(0);
  const [completedEventsCount, setCompletedEventsCount] = useState(0);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalStore) => globalStore.event);

  useEffect(() => {
    reduxState?.events && setEventsData(reduxState.events?.events);
  }, [reduxState?.events]);

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  console.log(eventData);
  useEffect(() => {
    eventData?.map((data) => {
      console.log(data);
      //data.status !== "complete" ? setOnGoingEventsCount(onGoingEventsCount+1) : setCompletedEventsCount(completedEventsCount+1)
      if (data.status === "active") {
        setOnGoingEventsCount(onGoingEventsCount + 1);
      } else {
        setCompletedEventsCount(completedEventsCount + 1);
      }
      // if (data.status === "inactive") {
      // }
    });
  }, [reduxState?.events]);

  return (
    <>
      <NavBar />
      <div className="border-2">
        {/* <div className='lg:w-full h-32 lg:-mb-1.5'></div> */}
        {/* <div className="md:ml-10 w-2/5">
        <Tag eventName={"Events"} />
      </div> */}
        {/* <div className="flex flex-row bg-gray-200 md:bg-gray-50 items-center justify-around md:justify-start md:gap-10 mt-14 md:mt-20 lg:mt-40 md:ml-10">
          <div className="w-40 md:w-72 h-24 md:h-36  rounded-xl flex items-center justify-center md:shadow-xl md:border">
            <h4 className="text-sm md:text-xl text-gray-900 font-md md:font-bold">
              ON-Going Events {onGoingEventsCount}
            </h4>
          </div>
          <div className="w-40 md:w-72 h-24 md:h-36 rounded-xl flex items-center justify-center md:shadow-xl md:border">
            <h4 className="text-sm md:text-xl text-gray-900 font-md md:font-bold">
              Completed Events {completedEventsCount}
            </h4>
          </div>
        </div> */}

        <div className="flex flex-col gap-10 w-full items-center justify-center md:mt-44 pb-10">
          <OnGoingEvents />
          <CompletedEvents />
        </div>
      </div>
    </>
  );
};

export default Event;
