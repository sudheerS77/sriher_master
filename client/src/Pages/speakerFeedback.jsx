import React from "react";

//Components
import NavBar from "../components/Navbar/NavBar";

//Redux actions
import FeedbackForm from "../components/FeedBack/feedbackForm";

const SpeakerFeedback = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16 md:py-40 ">
        <FeedbackForm />
      </div>
    </>
  );
};

export default SpeakerFeedback;
