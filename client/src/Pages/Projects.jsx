import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Components
import NavBar from "../components/Navbar/NavBar";
import ProjectComponent from "../components/Projects/project.conponent";

//Redux actions
import { getProject } from "../Redux/Reducer/Projects/project.action";

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <>
      <NavBar />
      <div className="py-10 relative top-10 lg:top-20">
        <h1 className="border-2 py-0.5 md:py-1 bg-gray-200 text-center text-2xl font-bold font-semibold mx-6 md:mt-5 lg:mt-10 lg:mx-44">
          Projects
        </h1>
        <ProjectComponent />
      </div>
    </>
  );
};

export default Projects;
