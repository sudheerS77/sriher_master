import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

//Redux actions
import { addBrochure } from '../../../Redux/Reducer/Brochure/brochure.action'; 

const AddBrochure = () => {
    const [brochure, setBrochure] = useState([
        {
            name: "",   
            image: "",
            url: []
        }
    ]);
    
    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            addBrochure({
            ...brochure,
          })
        );  
        
        setBrochure({
            name: "",   
            image: "",
            url: []
        });
    };
    

  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <span className="w-72">
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        onChange={(e) => setBrochure((prev) => ({...prev, name: e.target.value}))}
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    fullWidth
                    onChange={(e) => setBrochure((prev) => ({...prev, image: e.target.value}))}
                />  
                <TextField
                    required
                    id="outlined-required"
                    label="Links"
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
                    Submit
                </Link>
            </div>

        </div>
    </>
  )
}

export default AddBrochure;