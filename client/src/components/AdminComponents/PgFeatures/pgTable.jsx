import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewInAr } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Redux action
import { getPg, deletePg } from "../../../Redux/Reducer/Pg/pg.action";

const PGTable = (props) => {   
    const [pgData, setPgData] = useState([]);    
    const { type } = useParams();
    const navigate = useNavigate();
     
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getPg());
      }, [])

      const reduxState = useSelector((globalStore) => globalStore.pg)
      
      useEffect(() => {
        reduxState?.PG && setPgData(reduxState?.PG.pg);
      }, [reduxState?.PG]);

      var id = 1;
      const deleteItem = (_id) => {
        dispatch(deletePg(_id))
        return;    
      }

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Degree</TableCell>
            <TableCell className="tableCell">Year</TableCell>            
            {/* <TableCell className="tableCell">Description</TableCell> */}
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { pgData?.length > 0 ? (
          pgData?.map((row) => (            
            <TableRow key={row.id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{id++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.image} alt="image" className="w-12 h-12 rounded-md mr-10 fit" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.deg}</TableCell>
              <TableCell className="tableCell">{row.year}</TableCell>              
              {/* <TableCell className="tableCell w-5 truncate overflow-hidden">{row.description}</TableCell>               */}
              <TableCell className="tableCell">
                <span className={row.status === "Active" ? "p-2 rounded-sm text-white bg-green-900" : "p-2 rounded-sm text-yellow-100 bg-yellow-500"}>{row.status}</span>
              </TableCell>              
              <TableCell className="tableCell">
                <Link to={`/admin/pg/${row._id}`}>
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </Link>
              </TableCell>  
              <TableCell className="tableCell">
                <Link to="/admin/pg"
                  onClick={() => deleteItem(row._id)}
                >
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </Link>
              </TableCell>  
            </TableRow>
          )) ) : (
            <>
              Lading...
            </>
          )
        }
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default PGTable;