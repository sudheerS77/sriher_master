import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewQuilt } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import AddAchievement from './addAchievement';

//Redux actions
import { getEvents, deleteEvent } from "../../../Redux/Reducer/Events/event.action"


const EventTable = () => {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.event);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    reduxState?.events && setEvents(reduxState.events?.events);
  }, [reduxState?.events]);
    
  let idCount = 1;

  const deleteItem = (_id) => {
    dispatch(deleteEvent(_id));
    return;    
  }

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
            <TableCell className="tableCell">Options</TableCell>
            {/* <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          { events?.length > 0 ? (
            events?.map((row) => (            
                <TableRow key={row.id} className="hover:bg-gray-100">
                <TableCell className="tableCell">{idCount++}</TableCell>
                <TableCell className="tableCell">
                  <div className="flex items-center">
                    <img src={row.image} alt="" className="w-12 h-12 rounded-md mr-10 fit" />
                    {row.eventName}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.organiser.join(" , ")}</TableCell>
                <TableCell className="tableCell">{row.eventDate}</TableCell>              
                <TableCell className="tableCell">
                  <span className={row.status === "active" ? "p-2 rounded-sm text-white bg-green-900" : "p-2 rounded-sm text-yellow-100 bg-yellow-500"}>
                    {row.status}
                  </span>
                </TableCell>
                
                <TableCell className="tableCell border">
                  <div className="flex flex-row items-center gap-4">
                    <Link to={`/admin/events/show-participants/${row._id}`}>
                      <MdViewQuilt className="w-6 h-6 text-green-600"/>
                    </Link>
                    <Link to={`/admin/events/${row._id}`}>
                      <BiEdit className="w-6 h-6 text-blue-600"/>
                    </Link>
                    <Link to="/admin/events"
                    onClick={() => deleteItem(row._id)}
                    >
                    <MdDelete className="w-6 h-6 text-red-600"/>
                  </Link>
                  </div>
              </TableCell>  
                      
              </TableRow>
          ))): <></>}
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default EventTable;