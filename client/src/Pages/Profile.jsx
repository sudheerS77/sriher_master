import React from 'react'

//Components
import NavBar from '../components/Navbar/NavBar';
import UpdateUserProfile from '../components/updateUserProfile';
import UserProfile from '../components/userProfile';

const Profile = (props) => {
  return (
    <>        
      <NavBar />
      <div className="relative top-20 pb-20">        
            <div className="md:pt-20">
              { props.urlType === "profile" &&  <UserProfile />}
              { props.urlType === "update-profile" &&  <UpdateUserProfile />}
            </div>
      </div>      
	
    </>
  )
}

export default Profile