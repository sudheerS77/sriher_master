import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const CompletedEvents = () => {
  const [eventData, setEventsData] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.event);

  useEffect(() => {
    reduxState?.events && setEventsData(reduxState.events?.events);
  }, [reduxState?.events]);

  return (
    <>
      <h1 className="text-3xl font-bold border-2 shadow-lg mt-3 text-center p-2 w-full">Completed Events</h1>
        <div className="flex flex-wrap mx-6 md:mx-32 items-center justify-between gap-8">
          {eventData?.map((data) => (
            data.status !== "active" && (
              <div className="w-full md:w-72 border border-gray-200 py-2 flex flex-col items-center justify-center gap-2 shadow-2xl bg-grey-500">
                  <div className="w-full md:w-64 h-80">
                    <img src={`${data.image}`} alt="" className="w-full h-full"/>
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">{data.eventName}</h2>
                    <p className="w-full px-3 py-2 text-sm">{data.description}</p>
                  </div>
              </div>
            )
          ))            
          }                            
        </div>
    </>
  )
}

export default CompletedEvents