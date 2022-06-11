import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";


//Components
import NavBar from '../components/Navbar/NavBar'
import UGStudents from '../components/Achievemts/ugStudents';
import PG from '../components/Achievemts/pg';
import FacultyAch from '../components/Achievemts/facultyAch';
import Footer from '../components/footer';

//Redux actions
import { getAchievement } from "../Redux/Reducer/Achivements/achievements.action";

const Achievements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAchievement());
  }, []);

  return (
    <>  
        <NavBar />
        <div className="bg-purple-100relative top-20 py-10">            
            <div className="mt-10 md:mt-24">
              <UGStudents />
              <PG />
              <FacultyAch />
            </div>
        </div>  
        <Footer />
    </>
  )
}

export default Achievements