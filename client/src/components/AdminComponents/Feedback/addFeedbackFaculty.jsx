import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux actions
import { addFacultyForFeedback } from '../../../Redux/Reducer/Feedback/feedback.action'; 
const AddFeedbackFaculty = () => {
    const [facultyData, setFacultyData] = useState([
        {
            name: "",
            degree: "",
            position: "",
            image: "",
            feedback_status: "",
        }
    ]);  
    const [st, setSt] = useState();

    const dispatch = useDispatch();
    const submit = () => {
        console.log(facultyData);
        dispatch(
            addFacultyForFeedback({
            ...facultyData,
          }))
        setFacultyData({
            name: "",
            degree: "",
            position: "",
            image: "",
            feedback_status: "",
        });
    };

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-wrap gap-5">
                <TextField
                    required
                    id="outlined-required"
                    label="Faculty name"
                    onChange={(e) => setFacultyData((prev) => ({...prev, name: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    onChange={(e) => setFacultyData((prev) => ({...prev, image: e.target.value}))}                    
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Degree"
                    onChange={(e) => setFacultyData((prev) => ({...prev, degree: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Position"
                    onChange={(e) => setFacultyData((prev) => ({...prev, position: e.target.value}))}                    
                />
                <TextField
                    id="feedback_status"
                    select
                    label="Select"
                    onChange={(e) => setFacultyData((prev) => ({...prev, feedback_status: e.target.value}))}                    
                    value={facultyData.feedback_status}
                    helperText="Select the feedback_status of the student"
                >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>InActive</MenuItem>
                </TextField>
            </div>
            <div className="flex flex-row items-center gap-5">
               <Link to="/admin/feedback"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/feedback"
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

export default AddFeedbackFaculty;