import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//components
import Footer from "../components/footer";
import NavBar from "../components/Navbar/NavBar";
import FacultyCard from "../components/Faculty/faculty.Component";

//Redux action
import { getFaculty } from "../Redux/Reducer/Faculty/faculty.action";

const AllFaculty = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaculty());
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative top-16 md:top-0 lg:top-20 md:py-10">
        <div>
          <FacultyCard />
        </div>
      </div>
    </>
  );
};

export default AllFaculty;
