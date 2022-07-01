import React, { useEffect, useState } from 'react'
import DonutChart from 'react-donut-chart';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdFileDownload } from "react-icons/md";
import { CSVLink  } from "react-csv";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Redux actions
import { getFacultyFeedback } from '../../../Redux/Reducer/Feedback/feedback.action';

const DognutChart = () => {
  const { type } = useParams();
  const [ values, setValues ] = useState([])
  const [ feedbackUsers, setFeedbackUsers] = useState([]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getFacultyFeedback(type))
  }, [])
  
  const reduxState = useSelector((globalState) => globalState.Feedback)

  useEffect(() => {
    reduxState?.feedback && setValues(reduxState.feedback.rating);
    reduxState?.feedback && setFeedbackUsers(reduxState.feedback?.data);
  }, [reduxState])

  var idCount = 0;

  const csvData = feedbackUsers;
  return ( 
    <>
        <DonutChart
            data={[
              {
                label: 'Excellent',
                value: values ? values?.[0] : 0,
              },
              {
                label: 'Good',
                value: values ? values?.[1] : 0,
              },
              {
                label: 'Moderate',
                value: values ? values?.[2] : 0,
                
              },
              {
                  label: 'Unsatisfied',
                  value: values ? values?.[3] : 0,
                  
                },
                {
                  label: 'Poor',
                  value: values ? values?.[4] : 0,                  
                }
            ]}
          />
          <div className="flex flex-col items-end justify-center shadow-lg">
            {feedbackUsers?.length > 0 ? (
              <div className="flex items-center gap-2 border border-gray-50 bg-green-700 text-gray-50 text-xl font-semibold p-2 rounded-md shadow-md mb-2">
              <CSVLink data={csvData} filename={"feedback.csv"}>Download</CSVLink>
              <MdFileDownload className="w-6 h-6"/>            
            </div>
            ) : (
             <span>
              <div className="flex items-center gap-2 border border-gray-50 bg-red-700 text-gray-50 text-xl font-semibold p-2 rounded-md shadow-md mb-2">
              No Data To Download            
              <MdFileDownload className="w-6 h-6"/>            
            </div>
             </span> 
            )
            }
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" id="table-to-xls">
                <TableHead>            
                  <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Email</TableCell>
                    <TableCell className="tableCell">PhoneNumber</TableCell>            
                    <TableCell className="tableCell">Rating</TableCell>
                    <TableCell className="tableCell">Topic Rating</TableCell>
                    <TableCell className="tableCell">Feedback</TableCell>
                    <TableCell className="tableCell">Suggestions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbackUsers?.map((row) => (            
                    <TableRow key={row._id}  className="hover:bg-gray-100">
                      <TableCell className="tableCell">{idCount++}</TableCell>
                      <TableCell className="tableCell">{row.name}</TableCell>
                      <TableCell className="tableCell">{row.email}</TableCell>
                      <TableCell className="tableCell">{row.phoneNumber}</TableCell>              
                      <TableCell className="tableCell">{row.rating}</TableCell>              
                      <TableCell className="tableCell">{row.topicRating}</TableCell>              
                      <TableCell className="tableCell">{row.feedback}</TableCell>              
                      <TableCell className="tableCell">{row.suggestion}</TableCell>              
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>                  
          </div>                     
    </>
  )
}

export default DognutChart