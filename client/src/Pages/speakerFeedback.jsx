import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

//Components
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/footer";

//Redux actions
import FeedbackForm from '../components/FeedBack/feedbackForm';
import { getFeedback } from '../Redux/Reducer/Feedback/feedback.action';

const SpeakerFeedback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedback());
  }, []);
 
  
  return (
    <>
      <NavBar />
      <div className="py-40 ">
        <FeedbackForm />        
      </div>
    </>
  )
}

export default SpeakerFeedback;