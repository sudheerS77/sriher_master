import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

//Redux action
import { getSpecificBrochure, updateBrochure } from '../../../Redux/Reducer/Brochure/brochure.action'; 

const UpdateBrochure = () => {
    const { type } = useParams();
    const [brochure, setBrochure] = useState([]);  

    useEffect(() => {
        dispatch(getSpecificBrochure(type));
    }, [])
    const reduxState = useSelector((globalStore) => globalStore.brochure);
    console.log(reduxState);
  useEffect(() => {
    reduxState?.brochure && setBrochure(reduxState.brochure?.brochure);
  }, [reduxState]);
    
    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            updateBrochure({
            ...brochure,
          })
        );
    } 
    

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <span className="w-72">
                    <TextField
                        required
                        id="outlined-required"
                        helperText="Name"
                        value={brochure?.name}
                        onChange={(e) => setBrochure((prev) => ({...prev, name: e.target.value}))}
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    helperText="Image url"
                    value={brochure?.image}
                    fullWidth
                    onChange={(e) => setBrochure((prev) => ({...prev, image: e.target.value}))}
                />  
                <TextField
                    required
                    id="outlined-required"
                    helperText="Links"
                    value={brochure?.url}
                    fullWidth
                    onChange={(e) => setBrochure((prev) => ({...prev, url: e.target.value}))}
                />                                             
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/brochure"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/brochure"
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

export default UpdateBrochure;
