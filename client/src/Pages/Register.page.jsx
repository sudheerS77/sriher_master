import React from "react";

//Components
import Register from "../components/Authentication/register";
import NavBar from "../components/Navbar/NavBar";

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <div className="relative top-20 md:top-44">
        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
