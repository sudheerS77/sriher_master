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
      <div className="bg-indigo-50 py-10 top-20">
        <div className="w-full mt-14 md:mt-24 -mb-1.5"></div>
        <ProjectComponent />
      </div>
    </>
  );
};

export default Projects;
