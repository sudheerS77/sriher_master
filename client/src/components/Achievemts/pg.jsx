import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const PG = () => {
    const [pg, setPG] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.achievement);

    useEffect(() => {
        console.log(reduxState?.achievements);
        reduxState?.achievements && setPG(reduxState.achievements.achievememts);
    }, [reduxState?.achievements]);
  return (
    <>
      <div className="flex flex-col mb-14">
        <div className="flex flex-row items-center justify-between pb-10 mt-10">
          <h1 className="border-2 py-0.5 md:py-1 bg-gray-200 text-2xl text-center font-bold mb-3 ml-3 w-full">
            PG Students
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:gap-20">
          {pg?.map(
            (data) =>
              data.userType === "pg" && (
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between shadow-2xl md:shadow-sm">
                  <div className="w-80 md:h-48 border-2">
                    <img
                      src={`${data.image}`}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-3/5 md:ml-10 md:ml-0 px-2 md:px-10 py-5 bg-gray-50 border border-gray-100 flex flex-col gap-2 md:gap-5">
                    <div className="flex flex-col items-start gap-0.2">
                      <h5 className="text-md md:text-lg font-semibold">
                        {data.name}
                      </h5>
                      <h6 className="text-md text-blue-400 font-light">
                        {data.position}
                      </h6>
                      <h6 className="text-md font-thin text-blue-400">
                        {data.degree}
                      </h6>
                    </div>
                    <p className="text-sm md:text-md font-light text-gray-500 w-80 md:w-full">
                      {data.description}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default PG