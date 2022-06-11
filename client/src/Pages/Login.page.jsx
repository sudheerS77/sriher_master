import React from 'react'
import { useParams } from 'react-router-dom'

//Components
import NavBar from '../components/Navbar/NavBar'
import Login from '../components/Authentication/Login';
const LoginPage = () => {
  const { type } = useParams();
  return (
    <>
      <NavBar />
      <div className="relative top-40">
        <Login />
      </div>
      
    </>
  )
}

export default LoginPage;