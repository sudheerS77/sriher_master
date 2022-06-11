import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DetailsTable = () => {
  const [eventData, setEventsData] = useState([]);
  var count = 1;
    const rows = [
      {
        id: 1,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Approved",
      },
      {
        id: 2,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Approved",
      },
      {
        id: 3,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Pending",
      },
      {
        id: 4,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Approved",
      },
      {
        id: 5,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Pending",
      },
      {
        id: 6,
        eventName: "Cultural Events",
        img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        organizedBy: "John Smith",
        date: "1 March",         
        status: "Approved",
      },
  
      
    ];
    const reduxState = useSelector((globalStore) => globalStore.event);

  useEffect(() => {
    reduxState?.events && setEventsData(reduxState.events?.events);
  }, [reduxState?.events]);
  const dispatch = useDispatch();

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Event Name</TableCell>
            <TableCell className="tableCell">Organized By</TableCell>
            <TableCell className="tableCell">Date</TableCell>            
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventData?.map((row) => (            
            <TableRow key={row.id} className="hover:bg-gray-100">
              <TableCell className="tableCell">{count++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.image} alt="" className="w-12 h-12 rounded-md mr-10 fit" />
                  {row.eventName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.organizedBy}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>              
              <TableCell className="tableCell">
                <span className={row.status === "Approved" ? "p-2 rounded-sm text-white bg-green-900" : "p-2 rounded-sm text-yellow-100 bg-yellow-500"}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                  <BiEdit className="w-6 h-6 text-blue-600"/>
              </TableCell>  
              <TableCell className="tableCell">
                  <MdDelete className="w-6 h-6 text-red-600"/>
              </TableCell>  
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default DetailsTable;