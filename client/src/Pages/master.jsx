import React from "react";
import { useParams } from "react-router-dom";

//Pages
import Event from "./Event";
import GalleryPage from "./Gallery";
import Home from "./Home";
import Achievements from "./Achievements";
import Projects from "./Projects";
import LoginPage from "./Login.page";
import RegisterPage from "./Register.page";
import AllFaculty from "./allFaculty";
import AllVisitingFaculty from "./allVisitingFaculty";
import AllPGStudents from "./allPgStudents";
import Profile from "./Profile";
import Conference from "./conference";
import SpeakerFeedback from "./speakerFeedback";
import Brochure from "./brochure";

const Master = () => {
  let { type } = useParams();
  return (
    <div>
      {type === "home" && <Home />}
      {type === "brochure" && <Brochure />}
      {type === "events" && <Event />}
      {type === "gallery" && <GalleryPage />}
      {type === "achivements" && <Achievements />}
      {type === "faculty" && <AllFaculty />}
      {type === "visitingfaculty" && <AllVisitingFaculty />}
      {type === "pg" && <AllPGStudents />}
      {type === "conference" && <Conference />}
      {type === "feedback" && <SpeakerFeedback />}
      {type === "projects" && <Projects />}
      {type === "login" && <LoginPage />}
      {type === "register" && <RegisterPage />}

      {localStorage.SRCUser ? (
        type === "profile" && <Profile urlType={"profile"} />
      ) : (
        <div>
          {type === "profile" && <h1>Please Login to check your profile</h1>}
        </div>
      )}
      {localStorage.SRCUser ? (
        type === "update-profile" && <Profile urlType={"update-profile"} />
      ) : (
        <div>
          {type === "update-profile" && (
            <h1>Please Login to Update your profile</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Master;
