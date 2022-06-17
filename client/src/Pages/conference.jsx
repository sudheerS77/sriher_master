import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Components
import NavBar from "../components/Navbar/NavBar";
import ConferenceList from "../components/Events/conferenceList";

const Conference = () => {
  return (
    <>
      <NavBar />
      <div className="py-10 pt-16 md:pt-40 mx-3 md:mx-20 lg:mx-40">
        <h4 className="text-2xl font-bold my-2">Conference List</h4>
        <ConferenceList />
      </div>
    </>
  );
};

export default Conference;
