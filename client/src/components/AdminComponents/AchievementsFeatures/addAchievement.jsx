import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux action
import { addAchievement } from "../../../Redux/Reducer/Achivements/achievements.action";

const AddAchievement = () => {
    const { type } = useParams();
    const [achievememtData, setAchievementData] = useState([{
        userType: "",
        name: "",
        image: "",
        description: "",
        degree: "",
        position: "",
        status: ""

    }]);    

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            addAchievement({
            ...achievememtData,
          })
        );
        console.log(achievememtData);
        setAchievementData({
            userType: "",
            name: "",
            image: "",
            description: "",
            degree: "",
            position: "",

        });        
    };    
    

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="w-full flex flex-wrap gap-5">
                <TextField
                    required
                    id="name"
                    label="User name"
                    value={achievememtData?.name}
                    onChange={(e) => setAchievementData((prev) => ({...prev, name: e.target.value}))}
                />
                <TextField
                    required
                    id="image"
                    label="Image url"
                    fullWidth
                    value={achievememtData?.image}
                    onChange={(e) => setAchievementData((prev) => ({...prev, image: e.target.value}))}
                />
                <TextField
                    required
                    id="description"
                    label="description"
                    fullWidth
                    multiline
                    maxRows={4}
                    onChange={(e) => setAchievementData((prev) => ({...prev, description: e.target.value}))}
                />
                <TextField
                    required
                    id="degree"
                    label="degree"                    
                    onChange={(e) => setAchievementData((prev) => ({...prev, degree: e.target.value}))}
                />
                <TextField
                    required
                    id="position"
                    label="position"
                    onChange={(e) => setAchievementData((prev) => ({...prev, position: e.target.value}))}
                />                               
                <TextField
                    id="status"
                    select
                    label="Select"
                    defaultValue="choose"
                    value={achievememtData.userType}
                    helperText="Select the type of user"
                    onChange={(e) => setAchievementData((prev) => ({...prev, userType: e.target.value}))}
                >
                    <MenuItem value={"ugstudent"}>UG Student</MenuItem>
                    <MenuItem value={"pg"}>PG Student</MenuItem>
                    <MenuItem value={"faculty"}>Faculty</MenuItem>                
                 </TextField>  
                 <TextField
                    id="status"
                    select
                    label="Select"
                    defaultValue="choose"
                    value={achievememtData.status}
                    helperText="Select the type of user"
                    onChange={(e) => setAchievementData((prev) => ({...prev, status: e.target.value}))}
                >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>InActive</MenuItem>         
                 </TextField>                  
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
                    Submit
                </Link>
            </div>

        </div>
    </>
  )
}

export default AddAchievement;
