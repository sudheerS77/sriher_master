import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux action
import { getSpecificPhotos, updatePhotoData } from "../../../Redux/Reducer/Gallery/gallery.action";

const UpdateGallery = () => {
    const { type } = useParams();
    const [galleryImages, setGalleryImages] = useState([]);
        
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSpecificPhotos(type));      
    }, []) 
    const reduxState = useSelector((globalStore) => globalStore.gallery);
    
    useEffect(() => {
      reduxState?.photos && setGalleryImages(reduxState.photos.photos);
    }, [reduxState?.photos]);

    const submit = () => {
        dispatch(
            updatePhotoData({
            ...galleryImages,
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
                        value={galleryImages?.imageType}
                        onChange={(e) => setGalleryImages((prev) => ({...prev, imageType: e.target.value}))}
                    />
                </span>
                <TextField
                    required
                    id="outlined-required"
                    helperText="Image url"
                    fullWidth
                    value={galleryImages?.images}
                    onChange={(e) => setGalleryImages((prev) => ({...prev, images: e.target.value}))}
                />                                              
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/gallery"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/gallery"
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

export default UpdateGallery;
