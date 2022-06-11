import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux actions
import { addVisitingFaculty } from "../../../Redux/Reducer/VisitingFaculty/visitingFaculty.action";

const AddVisitingFaculty = () => {
    const [facultyData, setFacultyData] = useState([
        {
            name: "",
            degree: "",
            position: "",
            image: "",
            status: "",
        }
    ]);  

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            addVisitingFaculty({
            ...facultyData,
          })
        );
        setFacultyData({
            name: "",
            degree: "",
            position: "",
            image: "",
            status: "",
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
                    id="status"
                    select
                    label="Select"
                    onChange={(e) => setFacultyData((prev) => ({...prev, status: e.target.value}))}                    
                    value={facultyData.status}
                    helperText="Select the status of the student"
                >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>InActive</MenuItem>
                </TextField>
            </div>
            <div className="flex flex-row items-center gap-5">
               <Link to="/admin/visitingfaculty"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/visitingfaculty"
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

export default AddVisitingFaculty;