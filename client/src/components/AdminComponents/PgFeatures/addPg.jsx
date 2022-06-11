import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux actions
import { addPg } from "../../../Redux/Reducer/Pg/pg.action";


const AddPG = () => {
   
    const [pgData, setPgData] = useState(
        {
            name: "",
            deg: "",
            description: "",
            image: "",
            status: "",
        }
    );
    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            addPg({
            ...pgData,
          })
        );
        setPgData({
            name: "",
            deg: "",
            description: "",
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
                    label="student name"
                    onChange={(e) => setPgData((prev) => ({...prev, name: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    fullWidth
                    onChange={(e) => setPgData((prev) => ({...prev, image: e.target.value}))}                    
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    fullWidth
                    onChange={(e) => setPgData((prev) => ({...prev, description: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Degree"
                    onChange={(e) => setPgData((prev) => ({...prev, deg: e.target.value}))}                
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Year"
                    onChange={(e) => setPgData((prev) => ({...prev, year: e.target.value}))}                
                />
                <TextField
                    id="outlined-required"
                    select
                    label="Select"
                    onChange={(e) => setPgData((prev) => ({...prev, status: e.target.value}))}                    
                    value={""}
                    helperText="Select the status of the student"
                >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>InActive</MenuItem>                
                </TextField>
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/pg"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/pg"
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

export default AddPG
