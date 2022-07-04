import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



const FacultuAch = () => {
    const [faculty, setFaculty] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.achievement);

    useEffect(() => {
        console.log(reduxState?.achievements);
        reduxState?.achievements && setFaculty(reduxState.achievements.achievememts);
    }, [reduxState?.achievements]);
  return (
    <div className="">
      <h1 className="border-2 py-0.5 md:py-1 bg-gray-200 text-2xl text-center font-bold mb-6 ml-3">
        Faculty
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 mb-10">
        {faculty?.map(
          (data) =>
            data.userType === "faculty" && (
              <div className=" w-full flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-100 rounded-md py-4 md:py-2 rounded-lg mx-2 shadow-xl">
                <div className="w-full md:w-72 h-64 px-4 md:px-2 lg:px-0 mb-2 md:py-4">
                  <img
                    src={`${data.image}`}
                    alt="Loading ..."
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="md:w-3/6 lg:w-3/5 mx-5 md:mx-0 flex flex-col items-start gap-1">
                  <h5 className="text-xl font-semibold">{data.name}</h5>
                  <h6 className="text-md text-indigo-400 font-light">
                    {data.degree}
                  </h6>
                  <h6 className="text-md text-indigo-400 font-light">
                    {data.position}
                  </h6>
                  <p className="text-sm font-light text-gray-500">
                    {data.description}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FacultuAch