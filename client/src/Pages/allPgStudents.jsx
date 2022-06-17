import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//components
import PG from "../components/PG/pg";
import Footer from "../components/footer";
import NavBar from "../components/Navbar/NavBar";

//Redux actions
import { getPg } from "../Redux/Reducer/Pg/pg.action";

const AllPGStudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPg());
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative top-20 md:py-10">
        <div className="lg:mx-60">
          <PG />
        </div>
      </div>
    </>
  );
};

export default AllPGStudents;
