import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//components
import FacultyCarousal from "./faculty.Carousal";

const FacultyCard = () => {
  const [faculty, setFaculty] = useState([]);
  const reduxState = useSelector((globalStore) => globalStore.faculty);
  useEffect(() => {
    reduxState?.faculty && setFaculty(reduxState?.faculty.data);
  }, [reduxState?.faculty]);

  return (
    <>
      <div className="mb-20 md:py-10 mx-6">
        <div className="flex flex-row items-center justify-between mx-8 md:mx-40 pb-8">
          <h1 className="text-2xl md:font-3xl font-semibold md:font-bold pl-3">
            Faculty
          </h1>
          <a href="./allfaculty">
            <p className="text-xs md:text-sm font-light"></p>
          </a>
        </div>
        <div className="md:w-auto flex flex-wrap items-center justify-center gap-10">
          {faculty?.length > 0 ? (
            faculty?.map((data) => <FacultyCarousal {...data} />)
          ) : (
            <>Loading .....</>
          )}
        </div>
      </div>
    </>
  );
};

export default FacultyCard;
