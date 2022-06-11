import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

//Redux actions
import { addSlider } from '../../../Redux/Reducer/Slider/slider.action';

const AddSliderImage = () => {
    const [sliderImages, setSliderImages] = useState([
        {
            imageType : "",
            image :"",
        }
    ]);
    
    const dispatch = useDispatch();
    const submit = () => {
        console.log(sliderImages);
        dispatch(
            addSlider({
            ...sliderImages,
          })
        );  
        
        setSliderImages({
            imageType : "",
            image :"",
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
                        onChange={(e) => setSliderImages((prev) => ({...prev, imageType: e.target.value}))}
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    fullWidth
                    onChange={(e) => setSliderImages((prev) => ({...prev, image: e.target.value}))}
                />                                              
            </div>
            <div className="flex flex-row items-center gap-5">
            <Link to="/admin/slider"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/slider"
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

export default AddSliderImage;
