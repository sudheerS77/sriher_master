import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux action
import { getSpecificVisitingFaculty, updateVisitingFacultyData } from "../../../Redux/Reducer/VisitingFaculty/visitingFaculty.action";

const UpdateVisitingFaculty = () => {
    const { type } = useParams();
    console.log(type);
    const [facultyData, setFacultyData] = useState([]);  

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecificVisitingFaculty(type));
    }, [])

    const reduxState = useSelector((globalStore) => globalStore.visitingFaculty);
    console.log(reduxState.faculty.vfaculty);
    useEffect(() => {
      reduxState?.faculty && setFacultyData(reduxState?.faculty.vfaculty);
    }, [reduxState?.faculty]);   

    const submit = () => {
        dispatch(
            updateVisitingFacultyData({
            ...facultyData,
          })
        );
    } 

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-wrap gap-5">
                <TextField
                    required
                    id="outlined-required"
                    helperText="Faculty name"
                    value={facultyData?.name}
                    onChange={(e) => setFacultyData((prev) => ({...prev, name: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    helperText="Image url"
                    value={facultyData?.image}
                    onChange={(e) => setFacultyData((prev) => ({...prev, image: e.target.value}))}                    
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    helperText="Degree"
                    value={facultyData?.degree}
                    onChange={(e) => setFacultyData((prev) => ({...prev, degree: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    helperText="Position"
                    value={facultyData?.position}
                    onChange={(e) => setFacultyData((prev) => ({...prev, position: e.target.value}))}                    
                />
                <TextField
                    id="status"
                    select
                    onChange={(e) => setFacultyData((prev) => ({...prev, status: e.target.value}))}                    
                    value={facultyData?.status}
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
                    Update
                </Link>
            </div>

        </div>
    </>
  )
}

export default UpdateVisitingFaculty;
