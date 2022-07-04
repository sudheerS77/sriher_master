import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DognutChart from './dognutChart';
import options from "../../css/options.css";

//Redux actions

const FacultyTable = () => {
    const [facultyData, setFacultyData] = useState([]);  
    

    let idCount = 1;
    
    return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Faculty Name</TableCell>
            <TableCell className="tableCell">Deg</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {facultyData?.map((row) => (             */}
            <TableRow key={12}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{idCount++}</TableCell>              
              <TableCell className="tableCell">{"kjdfgkfdbgkjbkjb gkjfbgkjabk"}</TableCell>              
              <TableCell className="tableCell">
                  <div className="border-2 py-4">
                  <DognutChart />
                  </div>
              </TableCell>              
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default FacultyTable;