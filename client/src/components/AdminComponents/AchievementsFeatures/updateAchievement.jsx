import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux action
import { getSpecificAchievement, updateAchievementData } from "../../../Redux/Reducer/Achivements/achievements.action";

const UpdateAchievement = () => {
    const { type } = useParams();
    const [achievement, setAchievements] = useState([]);       

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.achievement);


  useEffect(() => {
    dispatch(getSpecificAchievement(type));
  }, []);

  useEffect(() => {
      reduxState?.achievements && setAchievements(reduxState.achievements.achievememts);
  }, [reduxState?.achievements?.achievememts]); 
    
  const submit = () => {
    dispatch(
        updateAchievementData({
        ...achievement,
      })
    );
    // setAchievements({
    //     userType: "",
    //     name: "",
    //     image: "",
    //     description: "",
    //     degree: "",
    //     position: "",

    // });        
};    

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="w-full flex flex-wrap gap-5">
                <TextField
                    required
                    id="name"
                    helperText="User name"
                    value={achievement?.name}
                    onChange={(e) => setAchievements((prev) => ({...prev, name: e.target.value}))}
                />
                <TextField
                    required
                    id="image"
                    helperText="Image url"
                    fullWidth
                    value={achievement?.image}
                    onChange={(e) => setAchievements((prev) => ({...prev, image: e.target.value}))}
                />
                <TextField
                    required
                    id="description"
                    helperText="description"
                    fullWidth
                    multiline
                    maxRows={4}
                    value={achievement?.description}
                    onChange={(e) => setAchievements((prev) => ({...prev, description: e.target.value}))}
                />
                <TextField
                    required
                    id="degree"
                    helperText="degree"                    
                    value={achievement?.degree}
                    onChange={(e) => setAchievements((prev) => ({...prev, degree: e.target.value}))}
                />
                <TextField
                    required
                    id="position"
                    helperText="position"
                    value={achievement?.position}
                    onChange={(e) => setAchievements((prev) => ({...prev, position: e.target.value}))}
                />                               
                {/* <TextField
                    id="status"
                    select
                    label="Select"
                    defaultValue="choose"
                    helperText="Select the type of user"
                    value={achievement ? achievement.userType : ""}
                    onChange={(e) => setAchievements((prev) => ({...prev, userType: e.target.value}))}
                >
                    <MenuItem value={"UGStudent"} key="UGStudent">UG Student</MenuItem>
                    <MenuItem value={"PGStudent"} key="PGStudent">PG Student</MenuItem>
                    <MenuItem value={"Faculty"} key="Faculty">Faculty</MenuItem>                
                 </TextField>  
                 <TextField
                    id="status"
                    select
                    label="Select"
                    defaultValue="choose"
                    helperText="Select the type of user"
                    value={achievement?.status}
                    onChange={(e) => setAchievements((prev) => ({...prev, status: e.target.value}))}
                >
                    <MenuItem key="Active" value={"Active"}>Active</MenuItem>
                    <MenuItem key="Inactive" value={"Inactive"}>InActive</MenuItem>         
                 </TextField>                   */}
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/achievements"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/achievements"
                    onClick={submit}
                    className="px-2 py-1 bg-green-900 text-gray-50 rounded-md"
                >
                    Update
                </Link>
            </div>

        </div>
    </>
  )
}

export default UpdateAchievement;
