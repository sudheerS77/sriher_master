import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
import { getBrochure, deleteBrochure } from "../../../Redux/Reducer/Brochure/brochure.action";

const BrochureTable = () => {
  const [brochureData, setBrochureData] = useState([]);  

  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(getBrochure());
  }, [])

  const reduxState = useSelector((globalStore) => globalStore.brochure);
  useEffect(() => {
    reduxState?.brochure && setBrochureData(reduxState.brochure?.data);
  }, [reduxState]);


    const deleteItem = (_id) => {
      dispatch(deleteBrochure(_id));
      window.location.reload();
    }
    var idCount = 1;

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Images</TableCell>
            <TableCell className="tableCell">URL</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brochureData?.length > 0 ? (
            brochureData?.map((row) => (            
            <TableRow key={row._id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{idCount++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.image} alt="" className="w-44 h-24 rounded-md mr-10 fit" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.url}</TableCell>
              <TableCell className="tableCell">
                <Link to={`/admin/brochure/${row._id}`}>
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </Link>
              </TableCell>  
              <TableCell className="tableCell">
                <Link to="/admin/brochure"
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

export default BrochureTable;