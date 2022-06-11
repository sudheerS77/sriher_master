import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewInAr } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Reduc actions
import { getPhotos, deletePhoto } from "../../../Redux/Reducer/Gallery/gallery.action";

const GalleryTable = () => {
  const [galleryImages, setGalleryImages] = useState([]);
        
    const reduxState = useSelector((globalStore) => globalStore.gallery);
    
    useEffect(() => {
      reduxState?.photos && setGalleryImages(reduxState.photos.photos);
    }, [reduxState.photos])

    let idCount = 1;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPhotos());      
    }, [])

    const deleteItem = (_id) => {
      dispatch(deletePhoto(_id));
      return;    
    }

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Images</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {galleryImages?.length > 0 ? (
          galleryImages?.map((row) => (            
            <TableRow key={row._id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{idCount++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.images} alt="" className="w-44 h-24 rounded-md mr-10 fit" />
                  {row.imageType}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <Link to={`/admin/gallery/${row._id}`}>
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </Link>
              </TableCell>  
              <TableCell className="tableCell">
                <Link to="/admin/gallery"
                  onClick={() => deleteItem(row._id)}
                >
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </Link>
              </TableCell> 
            </TableRow>
          )) ) : (
            <>Loading...</>
          ) 
        }
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default GalleryTable;