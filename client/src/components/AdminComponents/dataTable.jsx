import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete, MdGppGood } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//Redux action
import { getAllUsers, deleteUser } from '../../Redux/Reducer/User/user.action';

const DataTable = () => {
    const [rows, setRows] = useState([]);
    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'full name', width: 130 },
        // { field: 'instiution', headerName: 'Institution', width: 130 },
        { field: 'phoneNumber', headerName: 'Mobile number', type: 'number', width: 130 },
        { field: 'stateDentalCode', headerName: 'Dental Council Number', type: 'number', width: 160 },
        { field: 'state', headerName: 'State', width: 130 },        
        { field: 'Status', headerName: 'Status', width: 130 },        
        // { field: 'Options', headerName: 'Options', width: 140 },               
      ];
      
      const reduxState = useSelector((globalStore) => globalStore.user.allUsers);

      useEffect(() => {
        reduxState?.user && setRows(reduxState.user);
      }, [reduxState])

      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getAllUsers());
      },[])
    
    const deleteItem = (_id) => {
      const de = dispatch(deleteUser(_id));
      console.log(de);
    }

      // const rows = [
      //   { id: 1, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: 'View' },
      //   { id: 2, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 3, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 4, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 5, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 6, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 7, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 8, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      //   { id: 9, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      // ];
    var idCount = 1;
    return (
        <>
          <div style={{ height: 400, width: "100%" }}>
            {/* <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptionss={[5]}
              checkboxSelection
            /> */}
            <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">User Name</TableCell>
            <TableCell className="tableCell">Institution</TableCell>
            <TableCell className="tableCell">StateDentalCode</TableCell>            
            <TableCell className="tableCell">State</TableCell>
            <TableCell className="tableCell">PhoneNumber</TableCell>
            <TableCell className="tableCell">User Type</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{
    // "_id": "62937df3d348beab0d592150",
    // "fullName": "sdfk",
    // "institution": "dbkfjs",
    // "stateDentalCode": "dbskjb",
    // "state": "dbfkj",
    // "phoneNumber": [
    //     8596589654
    // ],
    // "typeOfRegistration": "Postgraduate",
    // "password": "$2a$08$kDlDp4ID6XhmLQm7a30gEuyh309v.d8q9Q2E3c6h/xNdacAmKVz8a",
    // "address": [
    //     "jdsfkj"
    // ],
    // "email": "gsudheerkumar86@gmail.com",
    // "userRole": "user",
    // "createdAt": "2022-05-29T14:06:43.486Z",
    // "updatedAt": "2022-05-29T14:06:43.486Z",
    // "__v": 0
}
          { rows?.length > 0 ? (
            rows?.map((row) => (            
                <TableRow key={row._id} className="hover:bg-gray-100">
                <TableCell className="tableCell">{idCount++}</TableCell>
                <TableCell className="tableCell">
                  <div className="flex items-center">                    
                    {row.fullName}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.institution}</TableCell>
                <TableCell className="tableCell">{row.stateDentalCode}</TableCell>              
                <TableCell className="tableCell">{row.state}</TableCell>              
                <TableCell className="tableCell">{row.phoneNumber}</TableCell>             
                <TableCell className="tableCell">{row.typeOfRegistration}</TableCell>              
                <TableCell className="tableCell">{row.email}</TableCell>                                              
              <TableCell className="tableCell">
                <Link to="/admin/"
                  onClick={() => deleteItem(row._id)}
                >
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </Link>
              </TableCell>               
              </TableRow>
          ))): <></>}
        </TableBody>
      </Table>
    </TableContainer>  
        </div>
        </>
    )
}

export default DataTable;
