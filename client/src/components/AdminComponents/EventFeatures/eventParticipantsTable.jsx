import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { MdFileDownload } from "react-icons/md";


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
      <div className="flex flex-col items-end justify-center shadow-lg">
        <div className="flex items-center gap-2 border border-gray-50 bg-green-700 text-gray-50 text-xl font-semibold p-2 rounded-md shadow-md mb-2">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className=""
            table="table-to-xls"
            filename="feedback"
            sheet="sheet"
            buttonText="Download"/>    
            <MdFileDownload className="w-6 h-6"/>            
          </div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table" id="table-to-xls">
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
      </div>
    </>
  )
}

export default EventParticipantsTable;