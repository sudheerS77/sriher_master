import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
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
import { getAllRegistredEvents } from "../../../Redux/Reducer/Events/event.action"


const EventParticipantsTable = () => {
    const { type } = useParams();
  const [events, setEvents] = useState();

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.event);
  console.log(reduxState);
  console.log(reduxState.userEvents.data);
  useEffect(() => {
    dispatch(getAllRegistredEvents(type));
  }, []);

  useEffect(() => {
    reduxState?.userEvents && setEvents(reduxState?.userEvents?.data);
  }, [reduxState]);

  let idCount = 1;
  console.log(events);

  

  return (
    <>    

    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Event Name</TableCell>
            <TableCell className="tableCell">User Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>            
            <TableCell className="tableCell">PhoneNumber</TableCell>
            <TableCell className="tableCell">Institution</TableCell>
            <TableCell className="tableCell">State</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Registration Date</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>    
          { events?.length > 0 ? (
            events?.map((row) => (    
                <TableRow key={row._id} className="hover:bg-gray-100">
                  <TableCell className="tableCell">{idCount++}</TableCell>
                  <TableCell className="tableCell">{row.eventName}</TableCell>
                  <TableCell className="tableCell">{row.user_name}</TableCell>
                  <TableCell className="tableCell">{row.user_email}</TableCell>
                  <TableCell className="tableCell">{row.user_phonenumber}</TableCell>
                  <TableCell className="tableCell">{row.user_institution}</TableCell>              
                  <TableCell className="tableCell">{row.user_State}</TableCell>
                  <TableCell className="tableCell">{
                    (row.eventCostType === "Free") ? "FREE" : (
                      (row.paymentStatus) ? "Successfull" : "Failed"
                    )}                
                  </TableCell>              
                  <TableCell className="tableCell">{row.registrationDate}</TableCell>                                                              
              </TableRow>
          )) ): (
            <>
                <h4 className="w-full py-4 text-lg font-bold text-blue-800 text-center">
                  NO USERS
                </h4>
            </>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default EventParticipantsTable;