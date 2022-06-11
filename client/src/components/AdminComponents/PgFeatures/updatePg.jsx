import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux actions
import { getSpecificPG, updatePgData } from "../../../Redux/Reducer/Pg/pg.action";


const UpdatePg = () => {   
    const { type } = useParams();
    const [pgData, setPgData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificPG(type));
    }, [])

    const reduxState = useSelector((globalStore) => globalStore.pg)
      
      useEffect(() => {
        reduxState?.PG && setPgData(reduxState?.PG.pg);
      }, [reduxState?.PG]);
    
      const submit = () => {
        dispatch(
            updatePgData({
            ...pgData,
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
                    value={pgData.name}
                    helperText="name"
                    onChange={(e) => setPgData((prev) => ({...prev, name: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    value={pgData.image}
                    helperText="Image"
                    fullWidth
                    onChange={(e) => setPgData((prev) => ({...prev, image: e.target.value}))}                    
                />
                 <TextField
                    required
                    id="outlined-required"
                    value={pgData.description}   
                    helperText="Description"
                    fullWidth
                    onChange={(e) => setPgData((prev) => ({...prev, description: e.target.value}))}                    
                />
                <TextField
                    required
                    id="outlined-required"
                    value={pgData.deg}
                    helperText="Degree"
                    onChange={(e) => setPgData((prev) => ({...prev, deg: e.target.value}))}                
                />
                <TextField
                    required
                    id="outlined-required"
                    value={pgData.year}
                    helperText="Year"
                    onChange={(e) => setPgData((prev) => ({...prev, year: e.target.value}))}                
                />
                <TextField
                    id="outlined-required"
                    select
                    value={pgData.status}
                    onChange={(e) => setPgData((prev) => ({...prev, status: e.target.value}))}                    
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

export default UpdatePg;
