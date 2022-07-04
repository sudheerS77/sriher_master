import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const UGStudents = () => {
  const [ugStudents, setUgStudents] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.achievement);

  useEffect(() => {
    console.log(reduxState?.achievements);
    reduxState?.achievements &&
      setUgStudents(reduxState.achievements.achievememts);
  }, [reduxState?.achievements]);

  return (
    <div>
      <h1 className="border-2 py-0.5 md:py-1 bg-gray-200 mx-6 text-center text-2xl font-bold font-semibold mb-6 mt-4 ml-3">
        UG Students
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 mb-10">
        {ugStudents?.map(
          (data) =>
            data.userType === "ugstudent" && (
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-50 rounded-md py-4 md:py-2 rounded-lg mx-2 border shadow-xl">
                <div className="w-full md:w-72 h-64 px-4 lg:px-0 mb-2 md:py-2">
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
};

export default UGStudents;

{
  /* 
  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 md:mx-20 lg:mx-40">
  <div className="w-full lg:w-5/12 flex flex-row items-center justify-center gap-8 bg-gray-100 py-5 px-2 mx-2 md:mx-0 shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-44 md:h-44">
                    <img
                      src={`${data.image}`}
                      alt="Loading ...."
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-sm md:text-md font-semibold">
                    {data.name}
                  </h2>
                </div>
                <div className="w-full">
                  <p className="text-sm w-full md:text-md font-light text-gray-500">
                    {data.description}
                  </p>
                </div>
              </div> */
}